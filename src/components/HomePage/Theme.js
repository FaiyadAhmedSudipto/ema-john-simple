import React, { useEffect, useState } from 'react';
import data from '../../fakeData/data.json';
import './Theme.css'
import Rides from '../Vehicles/Rides';


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
            <div>
                <ul>
                    {
                        players.map(product => <Rides handleAddProduct={handleAddProduct} players={product}></Rides>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Theme;