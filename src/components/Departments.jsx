import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';


export default function Departments(props) {

    return (
        <div className='departments' id='departments'>
            <h1 className='departments-title'>DEPARTMENTS</h1>
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h1 className='accordion-title'>Security</h1></Accordion.Header>
                    <Accordion.Body>
                        <h1 className='accordion-title'>Security</h1>
                        As the name suggests, this department is in charge of keeping the peace in the Lunatic Clubhouse.
                        It is composed of the Bouncers and the Lunatic Guards. The Bouncers can be found roaming all over
                        the clubhouse, as well as by the entrance. The Lunatic Guards are in shorter supply than the bouncers,
                        as their main duty is to keep the Lunatic Council secure and to make sure that only members can enter.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h1 className='accordion-title'>Food & Beverage</h1></Accordion.Header>
                    <Accordion.Body>
                        <h1 className='accordion-title'>Food & Beverage</h1>
                        The Cooks are always busy in the kitchen, preparing the best cuisine for the guests. All the beverages
                        are served in the food hall and the rooftop bar. The Bartenders are here to provide the coolest drinks
                        and cocktails in the galaxy, and the Waiters are the ones that deliver beverages and refreshments to  our
                        guests. The F&B team work together perfectly
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h1 className='accordion-title'>Managers</h1></Accordion.Header>
                    <Accordion.Body>
                        <h1 className='accordion-title'>Managers</h1>
                        This department, as the name suggests, is entrusted with the management of the Clubhouse.
                        They watch over all of the different departments, making sure all is going well.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h1 className='accordion-title'>Dealers</h1></Accordion.Header>
                    <Accordion.Body>
                        <h1 className='accordion-title'>Dealers</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><h1 className='accordion-title'>Founders</h1></Accordion.Header>
                    <Accordion.Body>
                        <h1 className='accordion-title'>Founders</h1>
                        This is a group of seven unique NFTs in our collection, that represt the founders of the clubhouse.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header><h1 className='accordion-title'>Entertainment</h1></Accordion.Header>
                    <Accordion.Body>
                        <h1 className='accordion-title'>Entertainment</h1>
                        The Entertainment department is charged with keeping our guests busy in the Clubhouse. This department is composed of the following:
                        The Dancers are some of the best in the TerraVerse, and they can always be seen performing for our guests.
                        The Singers also play an important part in our club, as their shows are the ones that keep guests coming.
                        Last but not least, the Magicians are the ones that can always be counted on to show some cool tricks.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}