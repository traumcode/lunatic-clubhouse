import React from 'react';
import {ReactComponent as Tooltip1} from "../assets/svgs/utility_tooltip1.svg";
import {ReactComponent as Tooltip1_1} from "../assets/svgs/utility_tooltip_1_1.svg";
import {ReactComponent as Tooltip2} from "../assets/svgs/utility_tooltip2.svg";
import {ReactComponent as Tooltip2_2} from "../assets/svgs/utility_tooltip_2_2.svg";
import {ReactComponent as Tooltip3} from "../assets/svgs/utility_tooltip3.svg";
import {ReactComponent as Tooltip3_3} from "../assets/svgs/utility_tooltip_3_3.svg";
import {ReactComponent as Tooltip4} from "../assets/svgs/utility_tooltip4.svg";
import {ReactComponent as Tooltip4_4} from "../assets/svgs/utility_tooltip_4_4.svg";
import {ReactComponent as Tooltip5} from "../assets/svgs/utility_tooltip5.svg";
import {ReactComponent as Tooltip5_5} from "../assets/svgs/utility_tooltip_5_5.svg";
import {ReactComponent as UtilityItem} from "../assets/svgs/utility_item.svg";

export default function Utility(props) {
    return (
        <div className='utility' id='utility'>
            <UtilityItem className='utility-item'/>
            <h1 className='utility-title'>UTILITY</h1>
            <div className='utility-tooltip1'>
                <Tooltip1_1 className='tootltip1_1'/>
                <Tooltip1 className='tootltip1'/>
                <h1 className='tooltip1-title'>Decision-making in the Lunatic Council</h1>
                <p className='tooltip1-description'>A crew member can enter the Lunatic Council where the decision-making for the Clubhouse is taking place.
                    The Lunatic Council is a DAO that focuses on the activities that happen inside our Clubhouse. </p>
            </div>
            <div className='utility-tooltip2'>
                <Tooltip2_2 className='tootltip2_2'/>
                <Tooltip2 className='tootltip2'/>
                <h1 className='tooltip2-title'>Receive a  percentage from the Clubhouse's treasury, as job payment.</h1>
                <p className='tooltip2-description'>Every job has its own unique department that represents different positions in the Clubhouse. </p>
            </div>
            <div className='utility-tooltip3'>
                <Tooltip3_3 className='tootltip3_3'/>
                <Tooltip3 className='tootltip3'/>
                <p className='tooltip3-description'>The increased offering of the NFT value.</p>
            </div>
            <div className='utility-tooltip4'>
                <Tooltip4_4 className='tootltip4_4'/>
                <Tooltip4 className='tootltip4'/>
                <p className='tooltip4-description'>Treasury and capital management.</p>
            </div>
            <div className='utility-tooltip5'>
                <Tooltip5_5 className='tootltip5_5'/>
                <Tooltip5 className='tootltip5'/>
                <p className='tooltip5-description'>Airdrop eligibility for future projects.</p>
            </div>
        </div>
    );
}