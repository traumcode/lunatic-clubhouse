import React from 'react';
import {ReactComponent as Circle1} from "../assets/svgs/road_map.svg";
import {ReactComponent as Circle2} from "../assets/svgs/road_map.svg";
import {ReactComponent as Circle3} from "../assets/svgs/road_map.svg";
import {ReactComponent as Circle4} from "../assets/svgs/road_map.svg";

export default function RoadMap(props) {
    return (
        <div className='road-map' id='road'>
            <h1 className='road-map-title'>ROAD MAP</h1>
            <div className='road-map-content'>
                <div className='circle-container'>
                    <Circle1 className='circle-svg'/>
                    <h2 className='circle-number'>Q1</h2>
                    <p className='road-map-text'>Q1 2022 <br/>
                        Market research <br/>
                        Idea finalization <br/>
                        Planning the marketing and community building <br/>
                        Start the Lunatic Vote <br/>
                        NFT reveal <br/>
                        Website (alpha) <br/>
                        Community Building <br/>
                        Social media Presence <br/>
                        Partnership Announcements <br/>
                    </p>
                </div>
                <div className='circle-container'>
                    <Circle2 className='circle-svg'/>
                    <h2 className='circle-number'>Q2</h2>
                    <p className='road-map-text'>Q2 2022 <br/>
                        Official Launch of the Lunatic Clubhouse<br/>
                        Website launch version 1.0<br/>
                        The Crew Collection Mint <br/>
                        Launching the Lunatic Council-DAO( version 1)<br/>
                        Introducing Lunatic Bets
                        The first design of the Lunatic Clubhouse Platform <br/>
                        Lunatic Clubhouse season 1 community
                    </p>
                </div>
                <div className='circle-container'>
                    <Circle3 className='circle-svg'/>
                    <h2 className='circle-number'>Q3</h2>
                    <p className='road-map-text'>Q3 2022 <br/>
                        Lunatic Clubhouse platform Alpha <br/>
                        Exposure to different projects<br/>
                        Introducing the Pawn Shop <br/>
                        Season 1 Community Leaderboard running <br/>
                        Announcing, The Lunatic Championships <br/>
                        Rank system added <br/>
                        Season 1 Start <br/>
                        Episode 1- 3 of season 1 Lunatic Clubhouse <br/>
                        Exposure to different Metaverse<br/>
                        Lunatic Championship starts <br/></p>
                </div>
                <div className='circle-container'>
                    <Circle4 className='circle-svg'/>
                    <h2 className='circle-number'>Q4 2022</h2>
                    <p className='road-map-text'>V2- web 3.0 of the Lunatic Council<br/>
                        Episode 2 of season 1 Lunatic Clubhouse<br/>
                        Leaderboard Updates<br/>
                        Episode 4-7 of season 1 Lunatic Clubhouse<br/>
                    </p>
                </div>
            </div>
        </div>
    );
}