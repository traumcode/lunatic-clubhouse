import React from 'react';
import {ReactComponent as CrewCollectionn} from "../assets/svgs/crew_collection.svg";

export default function CrewCollection(props) {
    return (
        <div className='crew-collection'>
            <h1 className='crew-collection-title'><CrewCollectionn className='crew-svg'/></h1>
        </div>
    );
}