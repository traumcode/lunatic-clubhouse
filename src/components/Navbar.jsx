import React, {useRef, useState} from "react";
import {MdClose} from "react-icons/md";
import {FaTwitter} from "react-icons/fa";
import {FaGitter} from "react-icons/fa";

export default function Navbar(props) {
    const [navState, setNavState] = useState(false);

    return (
        <nav>
            <div className="brand-container">
                <div className="toggle-container">
                    <div className="toggle">
                        {navState ? (
                            <MdClose onClick={() => setNavState(false)}/>
                        ) : (
                            <FaGitter onClick={() => setNavState(true)}/>
                        )}
                    </div>
                </div>
            </div>
            <div className={`links-container ${navState ? "nav-visible" : ""}`}>
                <ul className="links">
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a href="#utility">UTILITY</a>
                    </li>
                    <li>
                        <a href="#departments" style={{width: '390%'}}>DEPARTMENTS</a>
                    </li>
                    <li>
                        <a href="#story">OUR STORY</a>
                    </li>
                    <li className="brand">
                    </li>
                    <li>
                    </li>
                    <li>
                        <a href="#road">ROAD MAP</a>
                    </li>
                    <li>
                        <a href="#teamforce">TEAM FORCE</a>
                    </li>
                    <li>
                        <a href="#vote">VOTE</a>
                    </li>
                    <li>
                        <a href="#signup" style={{width: '170%', color: 'aqua'}}>CONNECT WALLET</a>
                    </li>
                    <li className='twitter-icon'>
                        <FaTwitter/>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
