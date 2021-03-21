import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute } from '@fortawesome/free-solid-svg-icons'
import './Rides.css';
import { useHistory } from 'react-router';
// import Price from '../PriceManage/Price';

const Rides = (props) => {
    // console.log(props);
    const { image, names, price } = props.players;

    const history = useHistory()

    // const handleClick = (names) => {
    //     // const url = `/service/${names}`;
    //     const url = `/details`;
    //     history.push(url);
    // }
    const handleClick = () => {
        history.push("/details");
    }


    return (
        <div className='product'>
            <div>
                <img src={image} alt=""></img>
            </div>
            <div className='product-name'>
                <h3 className="fs-3"> {names} </h3>
                <h4>Price: ${price}</h4>
                <button onClick={handleClick} className="btn btn-outline-primary"><FontAwesomeIcon icon={faRoute} />Have A Ride?</button>
            </div>
        </div>
    );
};

export default Rides;