import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css';

const Player = (props) => {
    // console.log(props);
    const { image, names, price } = props.players;
    return (
        <div className='product'>
            <div>
                <img src={image} alt=""></img>
            </div>
            <div className='product-name'>
                <h3 className="fs-3"> {names} </h3>
                <h4>Price: ${price}</h4>
                <button  className="btn btn-outline-primary"
                    onClick={() => props.handleAddProduct(props.players)}>
                    <FontAwesomeIcon icon={faUserPlus}  />Add to your Team</button>
            </div>
        </div>
    );
};

export default Player;