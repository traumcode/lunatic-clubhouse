import React from 'react';
import {useState} from "react";
import {a} from "@react-spring/web";

function NftGenerator(props) {
    const [layers, setLayers] = useState([{
        name: 'Layer', images: []
    }]);
    const [activeLayerIdx, setActiveLayerIdx] = useState(0);

    const activeLayer = layers?.[activeLayerIdx]
    const setLayer = (layer, index) => {
        setLayers(layers?.map((l, i) => {
            if (index === i) {
                return {
                    ...l, ...layer
                }
            }
            return l

        }))
    }

    return (
        <div className='flex-row'>
            <div className='flex-col'>
                {layers?.map(({name}, index) => (
                    <div className='flex-row' key={index} onClick={() => setActiveLayerIdx(index)}>
                        <input  value={name} onChange={(e) => {
                            setLayer({name: e.target.value}, index)
                        }}/>
                    </div>
                ))}
                <button onClick={() => setLayers([...layers, {name: 'Layer', images: []}])}>ADD</button>
            </div>
            <div className='flex-col'>
                <input multiple={true} type='file'
                       onChange={(e) => setLayer({images: [...activeLayer?.images, ...Array.from(e.target.files).map((file) => (
                               {
                                   file, rarity: 100
                               }
                           ))]}, activeLayerIdx)}/>
                {activeLayer?.images?.map((image, index) => (
                    <div key={index}>
                        <button onClick={() => {
                            setLayer({images: activeLayer.images.filter((img, i) => i !== index)}, activeLayerIdx)
                        }}>X
                        </button>
                        <img src={URL.createObjectURL(image.file)} alt={image.file.name} style={{maxHeight: "150px"}}/>
                        <input type='number' value={image.rarity} max={100} min={1} onChange={(e) => (
                            setLayer({
                            images: activeLayer.images?.map((img, i) => {
                                if (index === i) {
                                    return {...img, rarity: Math.min(100, Math.max(1, e.target.value || 1))}
                                }
                                return img
                            })
                        }, activeLayerIdx ))} />
                    </div>
                ))}
            </div>
            <button onClick={async () => {
                const formData = new FormData();
                const fileArr = layers.map((elem, index) => {
                    return elem.images.map((img) => {
                        return img.file
                    })
                }).flat();

                /* AICI */

                formData.append('layers', JSON.stringify(layers.map((layer) => {
                    return {
                        ...layer,
                        images: layer.images.map((img,index) => (
                            {
                                name: img.file.name.slice(0, -4), // fara extensie..
                                fileName: img.file.name,
                                rarity: img.rarity
                            }
                        ))
                    }
                })));

                fileArr.map
                (f => {
                    formData.append('images', f);
                })
                try {
                    const { id } = await (await fetch("/generate",{
                        method: 'POST',
                        body: formData
                    })).json();

                    if(id){
                        const interval = setInterval(async () => {
                            try {
                                const sts = await (await fetch("/generate/"+id)).json();
                                // div.innerText = JSON.stringify(sts, null, 2);
                                if(sts?.error || sts.status === "finished"){
                                    clearInterval(interval)
                                }

                                /* AICI */
                                if(sts.status === "finished"){
                                    const { images, json } = sts.files;
                                    console.log({ images, json })
                                }

                            } catch(e) {
                                clearInterval(interval)
                                // div.innerText = JSON.stringify(e, null, 2);
                            }
                        }, 500)
                    }
                } catch(e) {
                    // div.innerText = JSON.stringify(e, null, 2);
                }
            }}>
                GENERATE
            </button>
        </div>
    );
}

export default NftGenerator;