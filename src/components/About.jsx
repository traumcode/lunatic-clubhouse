import React from "react";
import {ReactComponent as AboutFrame} from "../assets/svgs/about_frame_svg2.svg";
import Photounu from '../assets/about_background.png'

export default function About() {


    return (
        <div className="about" id='about'>
            <div className='about-text'>
                <p className='about-description'>The Lunatic Clubhouse focuses on the communities that have formed around the non-fungible tokens created on the
                    terra-ecosystem. We want to connect the top communities of the terra-ecosystem by creating a Clubhouse where Lunatics
                    can spend time together in a challenging environment. The ultimate goal is to add as much value as possible to the terra-ecosystem
                    and to make use of the incredible utility of UST</p>
            </div>
        </div>
    );
}
