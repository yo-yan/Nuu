import React from 'react';
import './Card.css';

const Card = (props) => {

    return (
        <div className='wrapper'>
            <ul>
                <h1>id:{props.id}</h1>
                <h1>name:{props.name}</h1>
                <h1>date:{props.date}</h1>
            </ul>
        </div>
    );
};

export default Card;