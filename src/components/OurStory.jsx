import React, {useState, useEffect} from 'react';
import {ReactComponent as OurS} from "../assets/stories/ourStoryFrame.svg";
import Photo1 from '../assets/stories/01.jpeg';
import Photo2 from '../assets/stories/02.png';
import Photo3 from '../assets/stories/03.jpeg';
import Photo4 from '../assets/stories/04.jpeg';
import Photo5 from '../assets/stories/05.png';
import {ReactComponent as Button} from "../assets/svgs/sageata.svg";
import {AiOutlineArrowRight} from "react-icons/ai";

export default function OurStory(props) {
    const photos = [Photo1, Photo2, Photo3, Photo4, Photo5]
    const texts = [
        "                    THE BEGINNINGS\n" +
        "                    The Moon is grey and cold. The wind blows as a lunar sandstorm forms. All of a sudden three mysterious, hooded figures appear. They are walking through the wind and dust, moving steadily, but with a clear goal in sight. Having observed some lights in the distance, the figures agree that it resembles a metropolis…the TerraVerse, an intergalactic world that is continuously expanding. New species of LUNAtics are starting to populate this city, such as the Skelly Punks, who are searching for treasures, Goochies who are fighting for their lands, Puffins are at war with Eels, working on their mental health and Crunks are preparing for the zombie apocalypse. These are just a few of the species of LUNAtics that have begun to populate this new world.\n" +
        "\n" +
        "                    Each race has brought something special to the TerraVerse, and they all have their missions to carry out.\n" +
        "                    The Founders, a group of seven LUNAtics, got together and decided to form a crew. Someone needed to bring all those missions to the same place…\n" +
        "\n" +
        "                    They would provide value to the TerraVerse by establishing a venue where all of the LUNAtics could interact. It'll be known as the Lunatic Clubhouse…\n" +
        "                    The Founders devised a variety of activities and challenges to keep all inhabitants of this universe occupied for many seasons to come. It all started with the Lunatic Vote.\n" +
        "\n" +
        "                    This vote encourages all members to vote for their favourite community. With the help of the Lunatics, the Clubhouse is rapidly expanding in size and gaining a reputation as the best hangout in the galaxy.\n" +
        "\n" +
        "                    Everything appears to be going well thus far, as the initial members appear to be having a nice time. The atmosphere changes when a TerraBot, warns the LUNAtics that a meteor shower may strike the Lunatic Clubhouse…\n" +
        "                    Clubhouse Activities\n" +
        "                    The Clubhouse has been open for a while, and all members are having a good time whenever they choose to visit. The meteor shower that the TerraBot forewarned us about arrived, and the Lunatic Clubhouse was indeed hit by one. However, inside that meteor the Founders discovered a Dragon Egg, one of the rarest and priceless items on the TerraVerse.\n" +
        "\n" +
        "                    It was decided that a week-long series of activities was to be organised, in which the winner would get the egg. Participants had to prepare for a variety of themes, including history and geography, as well as wildlife animals and more. Most importantly, their knowledge of the TerraVerse was tested through questions about the different communities and protocols of this world. There could only be one winner in the end, and he now owns a dragon egg that is soon to hatch.\n" +
        "\n" +
        "                    Even though the doors have been opened to the public and the member’s area has been increasing in volume, the team is still working on a number of undertakings behind the scenes. Many more rooms are yet to be opened and revealed to the public.\n" +
        "                    So far, we've just had a glimpse of the #entry and #rooftopbar.\n" +
        "                    Today, we get to witness the ground floor's major interior design. This is where the majority of the action takes place.\n" +
        "\n" +
        "                    Several LUNAtics will compete in challenges in order to win more LUNATIC POINTS for the community they represent. This room will also be used for LUNAtics to obtain fresh bounty quests.\n" +
        "                    The Clubhouse drone, XR-17, maintains track of all the goings-on inside. He is constantly on the lookout and studying everyone's moves.\n" +
        "\n" +
        "                    Let's simply say that whenever XR-17 informs the Managers about anything questionable, our SECURITY will handle it in the Back Room...", "Clubhouse Activities\n" +
        "The Clubhouse has been open for a while, and all members are having a good time whenever they choose to visit. The meteor shower that the TerraBot forewarned us about arrived, and the Lunatic Clubhouse was indeed hit by one. However, inside that meteor the Founders discovered a Dragon Egg, one of the rarest and priceless items on the TerraVerse.\n" +
        "\n" +
        "It was decided that a week-long series of activities was to be organised, in which the winner would get the egg. Participants had to prepare for a variety of themes, including history and geography, as well as wildlife animals and more. Most importantly, their knowledge of the TerraVerse was tested through questions about the different communities and protocols of this world. There could only be one winner in the end, and he now owns a dragon egg that is soon to hatch.\n" +
        "\n" +
        "Even though the doors have been opened to the public and the member’s area has been increasing in volume, the team is still working on a number of undertakings behind the scenes. Many more rooms are yet to be opened and revealed to the public.\n" +
        "So far, we've just had a glimpse of the #entry and #rooftopbar.\n" +
        "Today, we get to witness the ground floor's major interior design. This is where the majority of the action takes place.\n" +
        "\n" +
        "Several LUNAtics will compete in challenges in order to win more LUNATIC POINTS for the community they represent. This room will also be used for LUNAtics to obtain fresh bounty quests.\n" +
        "The Clubhouse drone, XR-17, maintains track of all the goings-on inside. He is constantly on the lookout and studying everyone's moves.\n" +
        "\n" +
        "Let's simply say that whenever XR-17 informs the Managers about anything questionable, our SECURITY will handle it in the Back Room...", "ROOFTOP BAR\n" +
        "The rooftop bar is where most of the partying and drinking takes place in the clubhouse. This is where terraverse members come to blow off some steam, have a good time, dance to the best music in the galaxy, and get amused by our entertainment department. Here, the dancers and singers show everyone how to have a good time. Every so often the magicians can be seen performing their tricks.\n" +
        "\n" +
        "Also, most of the bartenders spend their time here, serving cocktails and drinks to our guests. Some people choose to come to the Lunatic Clubhouse just because of the legendary parties they host. One thing is clear: here, the party never ends.\n" +
        "\n" +
        "As you can see there are large panoramic windows that give some of the best views in the galaxy. The only question you should ask yourself is:\n" +
        "Why look outside when there is so much stuff happening on the inside?", "ENTRANCE\n" +
        "The Entrance of the clubhouse… Everybody remembers the feeling of when they first walked through the archways, into the beauty of it all. And the first thing you see is the Leaderboard, showing you which communities are the most popular, and which are leading the Lunatic Championship.\n" +
        "\n" +
        "As you approach the entrance, you instantly notice some of the best scents and perfumes across the TerraVerse.\n" +
        "\n" +
        "As you look past the entrance and see the colourful and vibrant interior of this building, you can’t help but ask yourself what sort of activities happen inside there. Why not come inside and see for yourself? But before you enter, you’ll have to get past the Bouncers branch of the security department, who make sure that everyone is safe and everything is smooth inside the Lunatic Clubhouse.", "This is one of the most important locations in the clubhouse where one may find themselves. The Lunatic Council brings together members of the Council and the Dao to consider the Club's future.\n" +
        "\n" +
        "The Lunatic Guards only admit members who have completed the DAO's entrance requirements. As a result, it is one of the most mysterious chambers. Once you've been granted admission to this area, you're not allowed to talk about what happens there or what new ideas come through.\n" +
        "\n" +
        "The meetings that will be held here were thoroughly considered during the design process. This amphitheatre design allows all members to be seen and heard by everyone in the room, ensuring optimal productivity and output from the meeting."]

    let [ index, setIndex] = useState(0)
    const [ photo, setPhoto ] = useState(photos[0]);
    const [ text, setText ] = useState(texts[0])

    const handleChangeIndex = () => {
        if(index === photos.length-1){
            setIndex(0)
            setPhoto(photos[0])
            setText(texts[0])
        } else {
            setIndex(index++)
            setIndex(index)
            setPhoto(photos[index])
            setText(texts[index])
        }
    }


    return (
        <div className='our-story' id='story'>
            <img src={photo} alt='casino' className='our-story-photo' />
            <h1 className='our-story-title'>OUR STORY</h1>
            <div className='our-story-grid'>
                <OurS className='our-story-frame'/>
                <div className='our-story-text'>{text} </div>
                <div className='our-story-button2' onClick={() => handleChangeIndex()}>
                    <AiOutlineArrowRight style={{color: 'white'}}/>
                </div>
            </div>
        </div>
    );
}