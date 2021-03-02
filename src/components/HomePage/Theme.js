import React, { useEffect, useState } from 'react';
import data from '../../fakeData/data.json';
import './Theme.css'
import Player from '../Player/Player';
import Price from '../PriceManage/Price';


const Theme = () => {
    const [price, setPrice] = useState([]);
    const [fake, setFake] = useState([]);
    useEffect(() => {
        setFake(data);
        console.log(data);
    }, [])

    const people = data;
    const [players, setPlayers] = useState(people);

    

    const handleAddProduct = (players) => {
        // console.log("Product Added", players);
        const newPrice = [...price, players];
        setPrice(newPrice);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    {
                        players.map(product => <Player
                            handleAddProduct={handleAddProduct}
                            players={product}></Player>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Price price={price}></Price>
            </div>
        </div>
    );
};

export default Theme;