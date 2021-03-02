import React from 'react';

const Price = (props) => {
    const price = props.price
    let total = 0;
    for (let i = 0; i < price.length; i++) {
        const product = price[i];
        total = total + product.price;
    }

    const tax = (total / 3).toFixed(2);
    const finalTotal = (total + Number(tax)).toFixed(2);

    return (
        <div>
            <h2>Your team</h2>
            <h3>Selected Players: {price.length}</h3>
            <h3>Selected Players: { }</h3>
            <h4>Players Price: {total}</h4>
            <h4>Tournament Charge: {tax}</h4>
            <h4>Money You Need:{finalTotal}</h4>
        </div>
    );
};

export default Price;