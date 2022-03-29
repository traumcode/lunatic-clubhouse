import React from 'react';
import Logo from '../assets/svgs/logo_1@2x.png'



export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer__addr">
                <img src={Logo} alt='logo' className='footer-logo'/>
            </div>

            <ul className="footer__nav">
                <li className="nav__item">
                    <h2 className="nav__title">Quick Links</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="#about">About</a>
                        </li>

                        <li>
                            <a href="#utility">Utility</a>
                        </li>

                        <li>
                            <a href="#vote">Vote</a>
                        </li>

                        <li>
                            <a href="#connect" style={{color: 'aqua'}}>Connect Wallet</a>
                        </li>
                    </ul>
                </li>

                <li className="nav__item nav__item--extra">
                    <h2 className="nav__title">Resources</h2>

                    <ul className="nav__ul nav__ul--extra">
                        <li>
                            <a href="#">Whitepaper</a>
                        </li>
                    </ul>
                </li>

                <li className="nav__item">
                    <h2 className="nav__title">Legal</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="/privacy">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="/terms">Terms of Use</a>
                        </li>

                        <li>
                            <a href="#">Sitemap</a>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="legal">
                <p>&copy; 2022 Lunatic Clubhouse. All rights reserved.</p>

                <div className="legal__links">
                    <span>Made with <span className="heart">♥</span> </span>
                </div>
            </div>
        </footer>
    );
}