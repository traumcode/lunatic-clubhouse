import React, {useRef, useState} from 'react';
import {ReactComponent as Circle1} from "../assets/svgs/road_map.svg";
import {ReactComponent as Circle2} from "../assets/svgs/road_map.svg";
import {ReactComponent as Circle3} from "../assets/svgs/road_map.svg";
import {ReactComponent as Circle4} from "../assets/svgs/road_map.svg";

import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Popover from 'react-bootstrap/Popover'
import PopoverBody from 'react-bootstrap/PopoverBody'
import PopoverHeader from 'react-bootstrap/PopoverHeader'
import {Button} from "react-bootstrap";


export default function RoadMap(props) {
    const popover1 = (
        <Popover id="popover-basic">
            <PopoverHeader as="h3">Q1 2022</PopoverHeader>
            <PopoverBody>
                    Market research <br/>
                    Idea finalization <br/>
                    Planning the marketing and community building <br/>
                    Start the Lunatic Vote <br/>
                    NFT reveal <br/>
                    Website (alpha) <br/>
                    Community Building <br/>
                    Social media Presence <br/>
                    Partnership Announcements <br/>
            </PopoverBody>
        </Popover>
    )
    const popover2 = (
        <Popover id="popover-basic">
            <PopoverHeader as="h3">Q2 2022</PopoverHeader>
            <PopoverBody>
                    Official Launch of the Lunatic Clubhouse<br/>
                    Website launch version 1.0<br/>
                    The Crew Collection Mint <br/>
                    Launching the Lunatic Council-DAO( version 1)<br/>
                    Introducing Lunatic Bets
                    The first design of the Lunatic Clubhouse Platform <br/>
                    Lunatic Clubhouse season 1 community
            </PopoverBody>
        </Popover>
    )
    const popover3 = (
        <Popover id="popover-basic">
            <PopoverHeader as="h3">Q3 2022</PopoverHeader>
            <PopoverBody>
                    Lunatic Clubhouse platform Alpha <br/>
                    Exposure to different projects<br/>
                    Introducing the Pawn Shop <br/>
                    Season 1 Community Leaderboard running <br/>
                    Announcing, The Lunatic Championships <br/>
                    Rank system added <br/>
                    Season 1 Start <br/>
                    Episode 1- 3 of season 1 Lunatic Clubhouse <br/>
                    Exposure to different Metaverse<br/>
                    Lunatic Championship starts <br/>
            </PopoverBody>
        </Popover>
    )
    const popover4 = (
        <Popover id="popover-basic">
            <PopoverHeader as="h3">Q4 2022</PopoverHeader>
            <PopoverBody>
                    Episode 2 of season 1 Lunatic Clubhouse<br/>
                    Leaderboard Updates<br/>
                    Episode 4-7 of season 1 Lunatic Clubhouse<br/>
            </PopoverBody>
        </Popover>
    )

    return (
        <div className='road-map' id='road'>
            <h1 className='road-map-title'>ROAD MAP</h1>
            <div className='road-map-content'>
                <div className='circle-container'>
                    <h2 className='circle-number'>Q1</h2>
                    <OverlayTrigger trigger="click" placement="right" overlay={popover1}>
                        <Circle1 className='circle-svg'/>
                    </OverlayTrigger>
                </div>
                <div className='circle-container'>
                    <h2 className='circle-number'>Q2</h2>
                    <OverlayTrigger trigger="click" placement="right" overlay={popover2}>
                        <Circle2 className='circle-svg'/>
                    </OverlayTrigger>
                </div>
                <div className='circle-container'>
                    <h2 className='circle-number'>Q3</h2>
                    <OverlayTrigger trigger="click" placement="left" overlay={popover3}>
                        <Circle2 className='circle-svg'/>
                    </OverlayTrigger>
                </div>
                <div className='circle-container'>
                    <h2 className='circle-number'>Q4</h2>
                    <OverlayTrigger trigger="click" placement="left" overlay={popover4}>
                        <Circle2 className='circle-svg'/>
                    </OverlayTrigger>
                </div>
            </div>
        </div>
    );
}