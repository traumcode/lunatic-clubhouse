import React, {useEffect, useRef} from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import CrewCollection from "../components/CrewCollection";
import Utility from "../components/Utility";
import Departments from "../components/Departments";
import OurStory from "../components/OurStory";
import RoadMap from "../components/RoadMap";
import TeamForce from "../components/TeamForce";
import Vote from "../components/Vote";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import scrollreveal from "scrollreveal";
import "../sass/index.scss";
import JoinUs from "../components/JoinUs";
import Discord from '../assets/n__discord.png'

export default function OnePageApp(props) {

    useEffect(() => {
        const registerAnimations = () => {
            const sr = scrollreveal({
                origin: "bottom",
                distance: "80px",
                duration: 2000,
                reset: false,
            });
            sr.reveal(
                `nav,.home,.releases,.crew-collection,.utility,.departments,.our-story,.road-map,.team-force,.vote,.join-us,.footer`,
                {
                    interval: 100,
                }
            );
        };
        registerAnimations();
    }, []);


    window.setTimeout(() => {
        const home = document.getElementsByClassName("home");
        home[0].style.transform = "none";
        const nav = document.getElementsByTagName("nav");
        nav[0].style.transform = "none";
    }, 1500);

    return (

        <div className="app-container">
            <a href='https://discord.gg/NQWP7R5n'><img src={Discord} alt='discord' className='discord-icon'/></a>
            <ScrollToTop/>
            <Navbar/>
            <Home/>
            <About/>
            <CrewCollection/>
            <Utility/>
            <Departments/>
            <OurStory/>
            <RoadMap/>
            <TeamForce/>
            <Vote/>
            <JoinUs/>
            <Footer/>
        </div>
    );
}