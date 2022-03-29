import React from 'react';
import TeamFrame from "../assets/svgs/team_frame.png";
import Photo1 from "../assets/teamNFTs/nft1.png"
import Photo2 from "../assets/teamNFTs/nft2.png"
import Photo3 from "../assets/teamNFTs/nft3.png"
import Photo4 from "../assets/teamNFTs/nft4.png"
import Photo5 from "../assets/teamNFTs/nft5.png"
import Photo6 from "../assets/teamNFTs/nft6.png"
import Photo7 from "../assets/teamNFTs/nft7.png"
import Photo8 from "../assets/teamNFTs/nft8.png"

export default function TeamForce(props) {
    return (
        <div className='team-force' id='teamforce'>
            <h1 className='team-force-title'>TEAM FORCE</h1>
            <div className='team-force-container'>
                <div className='team-force-member-container'>
                    <img src={Photo1} alt='photo' className='team-photo'/>
                    <h5 className='team-force-name'>SurferDude</h5>
                    <p className='team-force-name'>Operational Manager</p>

                </div>
                <div className='team-force-member-container'>
                    <img src={Photo3} alt='photo' className='team-photo'/>
                    <h5 className='team-force-name'>Vicorico</h5>
                    <p className='team-force-name'>Executive Manager</p>

                </div>
                <div className='team-force-member-container'>
                    <img src={Photo2} alt='photo' className='team-photo'/>
                    <h5 className='team-force-name'>Eredari</h5>
                    <p className='team-force-name'>Frontend & Technical Developer</p>
                </div>
            </div>
            <div className='team-force-container'>
                <div className='team-force-member-container'>
                    <img src={Photo4} alt='photo' className='team-photo'/>
                    <h5 className='team-force-name'>Ciprian</h5>
                    <p className='team-force-name'>UI/UX Design & Video Editor</p>
                </div>
                <div className='team-force-member-container'>
                    <img src={Photo5} alt='photo' className='team-photo'/>
                    <h5 className='team-force-name'>Greenbasilik</h5>
                    <p className='team-force-name'>Lead Designer & Stage Director</p>
                </div>
                <div className='team-force-member-container'>
                    <img src={Photo6} alt='photo' className='team-photo'/>
                    <h5 className='team-force-name'>haxydraws</h5>
                    <p className='team-force-name'>Content Designer</p>
                </div>
            </div>
            <div className='team-force-container'>
                <div className='team-force-member-container'>
                    <img src={Photo4} alt='photo' className='team-photo'/>
                    <h5 className='team-force-name'>Lord AFP</h5>
                    <p className='team-force-name'>Community Manager</p>
                </div>
                <div className='team-force-member-container'>
                    <img src={Photo7} alt='photo' className='team-photo'/>
                    <h5 className='team-force-name'>The_artitect98</h5>
                    <p className='team-force-name'>System Designer</p>
                </div>
                <div className='team-force-member-container'>
                    <img src={Photo8} alt='photo' className='team-photo'/>
                    <h5 className='team-force-name'>Rian Cult</h5>
                    <p className='team-force-name'>Music Producer</p>
                </div>
            </div>
        </div>
    );
}