import React, {useEffect, useRef, useState} from "react";
import {MdClose} from "react-icons/md";
import {FaTwitter} from "react-icons/fa";
import {FaGitter} from "react-icons/fa";

import {useWallet, useConnectedWallet, WalletStatus} from '@terra-money/wallet-provider';
import {ConnectWallet} from "../app/ConnectWallet"
import {Button, Modal} from "react-bootstrap";

export default function Navbar(props) {
    const [navState, setNavState] = useState(false);
    const [updating, setUpdating] = useState(true);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {status} = useWallet()

    const connectedWallet = useConnectedWallet()

    console.log(status)
    console.log(connectedWallet)

    useEffect(() => {
        const prefetch = async () => {
            setUpdating(false)
        }
        prefetch()
    }, [connectedWallet])

    return (
        <div>
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
                            <Button variant="transparent" className='modal-button' onClick={handleShow}>
                                {status === 'WALLET_CONNECTED' ? "DISCONNECT" : "CONNECT WALLET"}
                            </Button>
                        </li>
                        <li className='twitter-icon'>
                            <FaTwitter/>
                        </li>
                    </ul>
                </div>

            </nav>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{color: 'white', fontFamily: 'Audiowide'}}>Connect Wallet</Modal.Title>
                </Modal.Header>
                <Modal.Body><ConnectWallet/></Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
