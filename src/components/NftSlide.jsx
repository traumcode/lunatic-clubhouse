import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import Photo1 from "../assets/galleryNFTs/13.png"
import Photo2 from "../assets/galleryNFTs/2.png"
import Photo3 from "../assets/galleryNFTs/3.png"
import Photo4 from "../assets/galleryNFTs/4.png"
import Photo5 from "../assets/galleryNFTs/5.png"
import Photo6 from "../assets/galleryNFTs/6.png"
import Photo7 from "../assets/galleryNFTs/7.png"
import Photo8 from "../assets/galleryNFTs/8.png"
import Photo9 from "../assets/galleryNFTs/9.png"
import Photo10 from "../assets/galleryNFTs/10.png"
import Photo11 from "../assets/galleryNFTs/11.png"
import Photo12 from "../assets/galleryNFTs/12.png"
import Photo13 from "../assets/galleryNFTs/13.png"
import Photo14 from "../assets/galleryNFTs/14.png"
import Photo15 from "../assets/galleryNFTs/15.png"
import Photo16 from "../assets/galleryNFTs/16.png"
import Photo17 from "../assets/galleryNFTs/17.png"
import Photo18 from "../assets/galleryNFTs/18.png"
import Photo19 from "../assets/galleryNFTs/19.png"
import Photo20 from "../assets/galleryNFTs/20.png"
import Photo21 from "../assets/galleryNFTs/21.png"
import Photo22 from "../assets/galleryNFTs/22.png"
import Photo23 from "../assets/galleryNFTs/23.png"
import Photo24 from "../assets/galleryNFTs/24.png"
import Photo25 from "../assets/galleryNFTs/25.png"
import Photo26 from "../assets/galleryNFTs/26.png"
import Photo27 from "../assets/galleryNFTs/27.png"


const cards = [
    Photo1,Photo2,Photo3,Photo4,Photo5,Photo6,Photo7,
    Photo8,Photo9,Photo10,Photo11,
    Photo12,Photo13,Photo14,Photo15,Photo16,Photo17,
    Photo18,Photo19,Photo20,Photo21,
    Photo22,Photo23,Photo24,Photo25,Photo26,Photo27
]
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function NftSlide() {
    const [gone] = useState(() => new Set())
    const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) }))
    const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
        const trigger = velocity > 0.2
        const dir = xDir < 0 ? -1 : 1
        if (!down && trigger) gone.add(index)
        set(i => {
            if (index !== i) return
            const isGone = gone.has(index)
            const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0
            const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0)
            const scale = down ? 1.1 : 1
            return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
        })
        if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
    })
    return (
        <div className='nft-container'>
            {props.map(({x, y, rot, scale}, i) => (
                <animated.div key={i} className='divdiv'
                              style={{transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)}}>
                    <animated.div {...bind(i)} className='divdivdiv' style={{
                        transform: interpolate([rot, scale], trans),
                        backgroundImage: `url(${cards[i]})`

                    }}/>
                </animated.div>))
            }
        </div>
    )
}

export default NftSlide;