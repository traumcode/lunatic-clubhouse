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
                    <p className='road-map-text'>Q1 2022 <br/> Launch Discord <br/> Start the Lunatic Vote <br/> NFT
                        reveal <br/> Website <br/> Community Building</p>
                </div>
                <div className='circle-container'>
                    <Circle2 className='circle-svg'/>
                    <h2 className='circle-number'>Q2</h2>
                    <p className='road-map-text'>Q2 2022 <br/> Public Mint <br/> Official launch of the Lunatic
                        Clubhouse <br/> First design of the Lunatic <br/> Clubhouse Platform <br/> Lunatic Clubhouse Season
                        1 trailer video <br/> The letter collection</p>
                </div>
                <div className='circle-container'>
                    <Circle3 className='circle-svg'/>
                    <h2 className='circle-number'>Q3</h2>
                    <p className='road-map-text'>Q3 2022 <br/> Public Mint "The letter" collection <br/> Lunatic Clubhouse
                        platform Alpha <br/> Launching the Lunatic Council DAO(version 1) <br/> Introducing the - LChip
                        UST <br/> Introducing Lunatic Bets <br/> Introducing the Pawn Shop <br/> Season 1
                        Community <br/> Leaderboard running <br/> Announcing "The Lunatic Championship"<br/> Season 1
                        Start <br/> Episode of season 1 Lunatic Clubhouse <br/> Exposure to different Metaverse</p>
                </div>
                <div className='circle-container'>
                    <Circle4 className='circle-svg'/>
                    <h2 className='circle-number'>Q4</h2>
                    <p className='road-map-text'>To be continued</p>

                </div>
            </div>
        </div>
    );
}