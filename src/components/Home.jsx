import React from "react";
import Video1 from '../assets/intro_video.mp4'

export default function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="content">
                    <button className='button-64' role='button'>
                        <span className="text">Getting Started</span>
                    </button>
                    <button className='button-64' role='button'>
                        <span className="text">Whitepaper</span>
                    </button>
                    <video autoPlay muted loop id='lunaticVideo' className='video-64'>
                        <source src={Video1} type='video/mp4'/>
                    </video>
                </div>
            </div>
        </div>
    );
}
