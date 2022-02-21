import React from 'react';
import Video from '../components/Video';
import Videolanding from "../resources/animation1.mp4"
import Videolanding2 from "../resources/animation2.mp4"
import Videolanding3 from "../resources/animation3.mp4"
import Videolanding4 from "../resources/animation4.webm"


function Landing(props) {
    const myVideos = [
        Videolanding,
        Videolanding2,
        Videolanding3,
        Videolanding4
    ]


    return (
        <div className='container landing-page-container'>
            <Video videos={myVideos}/>
            <div className='landing-social-icons-container'>
                <a href='https://discord.gg/6CnJQMCYVw' className='landing-icon'>
                    <i className="fab fa-brands fa-discord icon-3d"/>
                </a>
                <a href='https://drive.google.com/file/d/1usTlobZxb7GcgYlhVcT38Kgn-vURrNVd/view?usp=sharing' className='landing-icon'>
                    <i className="fas fa-solid fa-scroll icon-3d" />
                </a>
                <a href='https://twitter.com/LunatiClub' className='landing-icon'>
                    <i className="fab fa-brands fa-twitter icon-3d"/>
                </a>
            </div>
        </div>
    );
}

export default Landing;