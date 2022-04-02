import React from 'react';
import {ReactComponent as Tooltip1} from "../assets/svgs/utility_tooltip1.svg";
import {ReactComponent as Tooltip1_1} from "../assets/svgs/utility_tooltip_1_1.svg";
import {ReactComponent as Tooltip2} from "../assets/svgs/utility_tooltip2.svg";
import {ReactComponent as Tooltip2_2} from "../assets/svgs/utility_tooltip_2_2.svg";
import {ReactComponent as Tooltip3} from "../assets/svgs/utilitynou.svg";
import {ReactComponent as Tooltip3_3} from "../assets/svgs/utility_tooltip_3_3.svg";
import {ReactComponent as Tooltip4} from "../assets/svgs/utilitynou.svg";
import {ReactComponent as Tooltip4_4} from "../assets/svgs/utility_tooltip_4_4.svg";
import {ReactComponent as Tooltip5} from "../assets/svgs/utilitynou.svg";
import {ReactComponent as Tooltip5_5} from "../assets/svgs/utility_tooltip_5_5.svg";
import {ReactComponent as UtilityItem} from "../assets/svgs/utility_item.svg";

export default function Utility(props) {
    return (
        <div className='utility' id='utility'>


                <div className='utility-tooltip1 tool-tip-general'>
                    <Tooltip1_1 className='tootltip1_1'/>
                    <Tooltip1 className='tootltip1'/>
                    <h1 className='tooltip1-title'>Decision-making in the Lunatic Council</h1>
                    <p className='tooltip1-description'>A crew member can enter the Lunatic Council where the
                        decision-making for the Clubhouse is taking place.
                        The Lunatic Council is a DAO that focuses on the activities that happen inside our
                        Clubhouse. </p>
                </div>
                <div className='utility-tooltip2 tool-tip-general'>
                    <Tooltip2_2 className='tootltip2_2'/>
                    <Tooltip1 className='tootltip2'/>
                    <h1 className='tooltip2-title'>Receive a percentage from the Clubhouse's treasury, as job
                        payment</h1>
                    <p className='tooltip2-description'>Every job has its own unique department that represents
                        different positions in the Clubhouse. Depending
                        on the department a percentage from the Clubhouse treasury will be distributed if certain
                        objectives are accomplished </p>
                </div>
                <div className='utility-tooltip3 tool-tip-general'>
                    <Tooltip3_3 className='tootltip3_3'/>
                    <Tooltip1 className='tootltip3'/>
                    <h1 className='tooltip3-title'>The increased offering of the NFT value </h1>
                    <p className='tooltip3-description'>With our challenges, we are looking to increase the value of
                        other Terra NFT projects which will automatically
                        create a bond between the Terraverse and The Crew members. </p>
                </div>
                <div className='utility-tooltip4 tool-tip-general'>
                    <Tooltip4_4 className='tootltip4_4'/>
                    <Tooltip1 className='tootltip4'/>
                    <h1 className='tooltip4-title'>Treasury and capital management </h1>
                    <p className='tooltip4-description'>The crew NFT holder will be able to choose in which direction
                        the treasury and capital are going to be distributed. </p>
                </div>
                <div className='utility-tooltip5 tool-tip-general'>
                    <Tooltip5_5 className='tootltip5_5'/>
                    <Tooltip1 className='tootltip5'/>
                    <h1 className='tooltip5-title'>Airdrop eligibility for future projects </h1>
                    <p className='tooltip5-description'>The crew holders will be eligble for further airdrops and projects!</p>
                </div>
        </div>
    );
}