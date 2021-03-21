import React from 'react';

const Details = (props) => {
    const price = props.price

    return (
        <div>
            <h2>Booking Granted</h2>
            <h3>Price: {price}</h3>
            <img src="https://i.ibb.co/0D9PjsT/Map.png" alt=""></img>
            <h3>Happy Journey!</h3>
        </div>
    );
};

export default Details;