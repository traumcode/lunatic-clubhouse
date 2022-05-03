const express = require('express')
const port = 3000;
const path = require('path');
const app = express();
const fs = require('fs');
const fse = require('fs-extra');
const crypto = require("crypto");
const exec = require('child_process').exec;

const multer = require('multer');
const upload = multer();

console.log("AICI");
app.use(express.static(path.join(__dirname, "../build"), { index: false })); // Serve html file

app.use(express.json({ limit: "100mb" })) // for parsing application/json
app.use(express.urlencoded({ extended: true, limit: "100mb" })) // for parsing application/x-www-form-urlencoded


/** Prevent going up or down the directory */
const parseId = rawId => makeAlphanum(rawId.replace(/-/g, ""));

/** Set up hashlips_art_engine if needed */
const hashLipsDir = path.join(__dirname, "./hashlips_art_engine");
if (!fs.existsSync(hashLipsDir)) {
    console.warn("setting up hashlips_art_engine...")
    exec("git clone https://github.com/HashLips/hashlips_art_engine.git", () => {
        exec(`cd ${hashLipsDir} && npm i`, () => {
            const configPath = `${hashLipsDir}/src/config.js`
            let configjs = fs.readFileSync(configPath, 'utf8');
            configjs = configjs.replace("const layerConfigurations =", `const layerConfigurations = require("./config.json") ?? `);
            console.log("Finished setting up hashlips_art_engine")
            fs.writeFileSync(configPath, configjs);
        });
    });
}

const makeAlphanum = text => {
    const res = `${text}`.replace(/\W/g, '');
    if(!res.length) throw "provide a valid alphanumeric string";
    return res;
}

exec(`rm -rf ${__dirname}/generate`);

/* Run scripts to generate */
let queuedProjects = [];
let activeProjectId;
const generate = () => {
    if(!activeProjectId && queuedProjects.length){
        activeProjectId = queuedProjects.shift();
        const projectPath = path.join(__dirname, "./generate/" + activeProjectId);
        const configDest = path.join(__dirname, "./hashlips_art_engine/src/config.json");
        const layersDest = path.join(__dirname, "./hashlips_art_engine/layers");
        exec(`rm ${configDest}`);
        exec(`rm -rf ${layersDest}/`);
        fse.move(
            `${projectPath}/config.json`,
            configDest, 
            { overwrite: true }
        );
        fse.move(
            `${projectPath}/layers`,
            layersDest, { overwrite: true }
        );

        fs.writeFileSync(`${projectPath}/status`, 'generating');
        const cmd = `cd ${__dirname}/hashlips_art_engine && npm run generate`;

        exec(cmd, function(error, _stdout, _stderr) {
            
            const stdout = reduceLogs(_stdout);
            const stderr = reduceLogs(_stderr);


            /* Generate error */
            const needsMoreLayers = stdout.includes("You need more layers or elements");
            const finishedOk = stdout.split("\n").filter(t => t?.trim().length).at(-1).includes("Created edition:");
            
            if(!finishedOk && (stderr || needsMoreLayers)){
                fs.writeFileSync(`${projectPath}/status`, 'error');
                fs.writeFileSync(`${projectPath}/error`, needsMoreLayers? getMatchingLine(stdout, "You need more layers or elements") : stderr);
            } else {

                fse.moveSync(
                    path.join(__dirname, "./hashlips_art_engine/build"),
                    `${projectPath}/build`,
                    { overwrite: true }
                );

                const images = fs.readdirSync(`${projectPath}/build/images`, {withFileTypes: true})
                    .map(item => `/generate/${activeProjectId}/images/${item.name}`)
                const json = fs.readdirSync(`${projectPath}/build/json`, {withFileTypes: true})
                    .map(item => `/generate/${activeProjectId}/json/${item.name}`);
                
                fs.writeFileSync(`${projectPath}/files`, JSON.stringify({ images, json }));
                fs.writeFileSync(`${projectPath}/status`, 'finished');

                const DEL_MINS = 4;
                /* Delete files after {DEL_MINS} minutes */
                setTimeout(() => {
                    exec(`rm -rf ${projectPath}/`)
                }, DEL_MINS * 60 * 1000)
                activeProjectId = undefined;
            }

            generate();
        });
    }
}

app.post("/generate", upload.array('images', 200), async (req, res, err) => {
    // console.log(req.body , req.files);
    try {
        const layers = JSON.parse(req.body.layers);
        const { growEditionSizeTo = 2, } = JSON.parse(req.body.options || "{}");
        const id = parseId(crypto.randomUUID());
        const projectPath = path.join(__dirname, "./generate/" + id);

        await fs.promises.mkdir(projectPath, { recursive: true });
        for await(const layer of layers){
            
            const layerPath = `${projectPath}/layers/${makeAlphanum(layer.name)}`;
            await fs.promises.mkdir(layerPath, { recursive: true });

            for await(const image of layer.images){
                const imageFile = req.files.find(f => f.originalname === image.fileName);
                if(!imageFile) throw "Image not found: " + image.fileName;
                if(!imageFile.mimetype.startsWith("image")) throw "File is not an image: " + image.fileName;
                const { rarity } = image;
                if(typeof rarity !== "number" || rarity < 1 || rarity > 100 || !Number.isInteger(rarity)) throw "image.rarity must be an integer between 1 and 100";
                const imageName = makeAlphanum(image.fileName.split('.').slice(0, -1).join(''));
                fs.writeFileSync(`${layerPath}/${imageName} #${rarity}.${imageFile.mimetype.split("/")[1]}`, imageFile.buffer);
            }
        }
        fs.writeFileSync(`${projectPath}/config.json`, 
            JSON.stringify([{ 
                growEditionSizeTo,
                layersOrder: layers.map((l, i)=> ({
                    name: makeAlphanum(l.name)
                }))
            }])
        );
        fs.writeFileSync(`${projectPath}/status`, 'queued');
        queuedProjects.push(id);
        generate();
        res.json({ id })
        
    } catch(err){
        console.error("Error saving file ", err);
        res.json({ err })
    }
});

app.get("/generate/:projectId/:type/:fileName", (req, res) => {
    
    const projectId = parseId(req.params.projectId);
    const { type, fileName } = req.params;
    const projectPath = path.join(__dirname, `./generate/${projectId}`);
    const files = JSON.parse(fs.readFileSync(`${projectPath}/files`, 'utf8'));
    if(!["json", "images"].includes(type) ){
        res.json({ err: "invalid type. Must be json or images"});
        return;
    }

    console.log(files);

    if( files?.[type]?.some(f => f.endsWith(`/${fileName}`) ) ){
        res.sendFile(`${projectPath}/build/${type}/${fileName}`);
    } else {
        res.json({ err: "file not found"});
    }
});

/** Get status of a generate project */
app.get("/generate/:id", (req, res) => {
    const id = parseId(req.params.id);
    if(!id || id === "undefined"){
        res.json({ error: "No id provided" });
        return;
    }
    const projectPath = path.join(__dirname, "./generate/" + id);
    const status = fs.readFileSync(projectPath + "/status", 'utf8');
    const error = status === "error"? fs.readFileSync(projectPath + "/error", 'utf8') : null;
    let files = [];
    if(status === "finished"){
        files = JSON.parse(fs.readFileSync(projectPath + "/files", 'utf8'));
    }
    res.json({ status, error, files });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"))
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});

function getMatchingLine(logs, text){
    return logs.split("\n").find(l => l.includes(text))
}

function reduceLogs(logs){
    let prevLineCount = 0;
    let result = [];
    if(!logs) return logs;
    logs.split("\n")
        .filter(l => l)
        .map(l => {
            if(result.at(-1) === l){
                prevLineCount++;
            } else {
                result.push(l + (prevLineCount? ` (${prevLineCount})` : ""));
                prevLineCount = 0;
            }
        })

    return result.join("\n");
}