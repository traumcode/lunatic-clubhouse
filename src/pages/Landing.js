import React from 'react';



function Landing(props) {
    return (
        <div className='container landing-page-container'>
            <h1>test</h1>
            <div className='landing-photo-container' style={{height: '550px'}}>
                <img className='landing-photo' src='https://i.ibb.co/sCMWk0d/logo-transparent-2.png' alt='landing photo'/>
            </div>
            <div className='landing-social-icons-container'>
                <a href='https://discord.gg/ec8Q7U6B' className='landing-icon'>
                    <i className="fab fa-brands fa-discord "/>
                </a>
                <a href='https://drive.google.com/file/d/1usTlobZxb7GcgYlhVcT38Kgn-vURrNVd/view?usp=sharing' className='landing-icon'>
                    <i className="fas fa-solid fa-scroll" />
                </a>
                <a href='https://twitter.com/LunatiClub' className='landing-icon'>
                    <i className="fab fa-brands fa-twitter"/>
                </a>
            </div>
        </div>
    );
}

export default Landing;