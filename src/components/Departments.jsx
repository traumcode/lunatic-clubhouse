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
                        As the name suggests, this department is in charge of keeping the peace in the Lunatic Clubhouse. It is composed of the Bouncers and the Lunatic Guards. The Bouncers can be found roaming all over the clubhouse, as well as by the entrance.

                        The Lunatic Guards are in shorter supply than the bouncers, as their main duty is to keep the Lunatic Council secure and to make sure that only qualified members can enter.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h1 className='accordion-title'>Food & Beverage</h1></Accordion.Header>
                    <Accordion.Body>
                        <h1 className='accordion-title'>Food & Beverage</h1>
                        This department is made up of Cooks, Bartenders, and Waiters.

                        The Cooks are always busy in the kitchen, preparing the best cuisine for the guests.

                        All the beverages are served in the food hall and the rooftop bar.

                        The Bartenders are here to provide the coolest drinks and cocktails in the galaxy.

                        Waiters are the ones that deliver beverages and refreshments to our guests.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h1 className='accordion-title'>Managers</h1></Accordion.Header>
                    <Accordion.Body>
                        <h1 className='accordion-title'>Managers</h1>
                        This department, as the name suggests, is entrusted with the management of the Clubhouse

                        They watch over all of the different departments, making sure all is going well.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h1 className='accordion-title'>Dealers</h1></Accordion.Header>
                    <Accordion.Body>
                        <h1 className='accordion-title'>Dealers</h1>
                        The dealers always have an Ace up their sleeve.

                        They can be found playing games with our guests and making sure that every activity is running smoothly.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><h1 className='accordion-title'>Founders</h1></Accordion.Header>
                    <Accordion.Body>
                        <h1 className='accordion-title'>Founders</h1>
                        This is a group of seven unique NFTs in our collection, that represent the Founders of the Clubhouse.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header><h1 className='accordion-title'>Entertainment</h1></Accordion.Header>
                    <Accordion.Body>
                        <h1 className='accordion-title'>Entertainment</h1>
                        The Entertainment department is charged with keeping our guests busy in the Clubhouse. This   department is composed of the following:

                        Dancers, singers, and Magicians are some of the best in the TerraVerse, and they can always be seen performing for our guests.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}