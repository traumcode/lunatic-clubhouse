import React from 'react';
import { useState, useRef } from "react";
import './nft-generator.scss';


function NftGenerator(props) {
    const fileInputRef = useRef(null);

    const [layers, setLayers] = useState([{
        name: 'Layer', images: []
    }]);
    const [activeLayerIdx, setActiveLayerIdx] = useState(0);
    const [generated, setGenerated] = useState();
    const [growEditionSizeTo, setGrowEditionSizeTo] = useState(2);

    const activeLayer = layers?.[activeLayerIdx]
    const setLayer = (layer, index) => {
        setLayers(layers?.map((l, i) => index === i? (layer? { ...l, ...layer } : null) : l).filter(l => l))
    }
    const setActiveLayerImage = (image, imageIndex) => {
        setLayer({
            images: activeLayer?.images
                .map((img, idx) => 
                    idx === imageIndex? ({ ...img, ...image }) : img
                )
                .filter(img => img)
        }, activeLayerIdx)
    }

    const generate = async () => {

        const formData = new FormData();
        const fileArr = layers.map(layer => 
            layer.images.map(img => img.file)
        ).flat();

        fileArr.forEach(f => {
            formData.append('images', f);
        });

        /**
         * formData = {
         *      images: File[];
         *      layers: {
         *          images: {
         *              name: string; // alphanumeric
         *              fileName: string;
         *              rarity: number; // 1 to 100
         *          }[]
         *      }[];
         *      options?: {
         *          growEditionSizeTo?: number; // > 0
         *      };
         * }
         */
        formData.append(
            'layers', 
            JSON.stringify(
                layers.map((layer) => ({
                    ...layer,
                    images: layer.images.map(img => ({
                        fileName: img.file.name,
                        rarity: img.rarity
                    }))
                }))
            )
        );
        formData.append(
            'options', 
            JSON.stringify({ growEditionSizeTo })
        );

        try {
            const { id } = await (await fetch("/generate", {
                method: 'POST',
                body: formData
            })).json();

            if (id) {
                const interval = setInterval(async () => {
                    try {
                        const sts = await (await fetch("/generate/" + id)).json();
                        let result = { ...sts };
                        /**
                         * sts = {
                         *   error?: string | null;
                         *   status?: "queued" | "error" | "finished";
                         *   files?: {
                         *      images: string[];
                         *      json: string[];
                         *   }
                         * }
                         */

                        if (sts?.error || sts.status === "finished") {
                            clearInterval(interval)
                        }

                        if (sts.status === "finished") {
                            const { json } = sts.files;
                            result.meta = await Promise.all(json.map(async url => ({
                                url,
                                content: await (await fetch(url)).text()
                            })));
                        }

                        setGenerated(result);
                        setShowLayers(false)

                    } catch (error) {
                        clearInterval(interval)
                        setGenerated({ error });
                    }
                }, 500)
            } else {
                setGenerated({ error: "Something went wrong. Could not get id for generate queue" });
            }
        } catch (error) {
            setGenerated({ error });
        }
    }

    let generateProblem;
    if(!layers?.some(l => l.images.length)){
        generateProblem = "Need at least a layer with images to generate!";
    } else if(layers?.some(l => !l.images.length)){
        generateProblem = "Some layers have no images!";
    }

    const addActiveLayerImages = (e) => {

        setLayer({
            images: [
                ...activeLayer?.images,
                ...Array.from(e.target.files).map((file) => (
                    { file, rarity: 100 }
                ))
            ]
        }, activeLayerIdx)
    }

    const [showLayers, setShowLayers] = useState(true);

    const ImageManager = <div className='flex-col p-1 f-1'>
        <div>Layer <span style={{ fontWeight: 800 }}>{activeLayer?.name}</span> images:</div>
        <div className='flex-col p-1 f-1 drag-and-drop' 
            style={{ border: "2px solid gray", borderStyle: "dotted" }}
            onDragOver={(ev) => {
                ev.target.setAttribute("drop-active", true);
                ev.preventDefault();
            }}
            onDragLeave={(ev) => {
                ev.target.removeAttribute("drop-active");
            }}
            onDrop={ev => {
                addActiveLayerImages(getDroppedFiles(ev));
                ev.target.removeAttribute("drop-active");
            }}
            onClick={e => {
                e.target.querySelector("input[type=file]")?.click();
            }}
        >
            <input key={activeLayerIdx}
                ref={fileInputRef}
                style={{width: 0, height: 0}} 
                multiple={true}
                type='file'
                accept='image/*'
                onChange={addActiveLayerImages}
            />
            <div className='flex-row' style={{ flexWrap: "wrap", gap: "1em" }}>
                {activeLayer?.images?.map((image, imageIndex) => (
                    <div key={imageIndex} className="relative flex-col">
                        <button onClick={() => setActiveLayerImage(null, imageIndex)}
                            className="absolute"
                            style={{ top: 0, right: 0, zIndex: 1}}
                        >
                            X
                        </button>
                        <img src={URL.createObjectURL(image.file)} alt={image.file.name} style={{ maxHeight: "150px" }} />
                        <div className='flex-row ai-center jc-center'>
                            <div className='m-1'>Rarity:</div>
                            <input type='number' value={image.rarity} max={100} min={1} onChange={(e) => (
                                setActiveLayerImage({ rarity: Math.min(100, Math.max(1, e.target.value || 1)) }, imageIndex))} />
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex-row jc-center p-1'>Click or drop images here!</div>
        </div>
    </div>


    return (
        <div className='flex-col p-1 f-1'>
            <div className={'flex-col p-1 ' + (showLayers? " f-1 " : " f-0 ")}>
                <div onClick={() => setShowLayers(!showLayers)} style={{ cursor: "pointer" }}>{showLayers? "Hide" : "Show"} layer options</div> 
                <div className='flex-row f-1'>
                    {showLayers && <>  
                        <div className='flex-col p-1 f-0'>
                            {layers?.map(({ name, images }, index) => (
                                <div className='flex-row w-fit jc-center ai-center' key={index} onClick={() => setActiveLayerIdx(index)} style={activeLayerIdx === index? { border: "1px solid blue"} : {}}>
                                    <input value={name} onChange={(e) => {
                                        setLayer({ name: e.target.value }, index)
                                    }} />
                                    <div>({images?.length})</div>
                                    {layers.length > 1 && <button onClick={() => setLayer(null, index)}>x</button>}
                                </div>
                            ))}
                            <button className="h-fit w-fit m-1" onClick={() => setLayers([...layers, { name: 'Layer', images: [] }])}>ADD LAYER</button>

                            <div className='flex-col gap-1' style={{ marginTop: "1em"}}>
                                <label forHtml="size">growEditionSizeTo:</label>
                                <input name='size' type={"number"} value={growEditionSizeTo} min={1} max={100000} onChange={e => {
                                    setGrowEditionSizeTo(Math.min(100, Math.max(1, e.target.value || 1)))
                                }}/>
                                <button className="h-fit w-fit " onClick={generate} disabled={Boolean(generateProblem)} title={generateProblem}>
                                    GENERATE
                                </button>
                            </div>
                            {generateProblem && <p style={{ color: "gray"}}>{generateProblem}</p>}
                        </div>
                                
                        {ImageManager}
                    </>}

                </div>
            </div>

            {generated && <div className='flex-col p-1' style={{ border: "1px solid gray"}}>
                
                {generated.status === "queued"?  
                    <div>Generating...</div> : 
                 generated.status === "finished"? 
                    <div className='p-1 flex-col'>Generated files ({generated.files?.images?.length}):
                        <div className='flex-row gap-1'>{generated.files?.images?.map(src => <img style={{ maxHeight: "200px" }} src={src}/>)}</div>
                        <div className='flex-row gap-1'>{generated.meta?.map(({ url, content }) => <div className='p-1' style={{ whiteSpace: "pre-line", border: "1px solid gray" }}>{content}</div>)}</div>
                    </div> :

                    <p style={{ color: "red"}}>Generation error: {generated?.error}</p>
                }
                
            </div>}
        </div>
    );
}

export default NftGenerator;


function getDroppedFiles(ev) {
    const files = [];

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === 'file') {
          var file = ev.dataTransfer.items[i].getAsFile();
          files.push(file)
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        files.push(ev.dataTransfer.files[i])
      }
    }

    return { target: { files } };
}