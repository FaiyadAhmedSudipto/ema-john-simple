import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                {/* <img src={props.product.img} alt=""></img> */}
                <img src={img} alt=""></img>
            </div>
            <div className='product-name'>
                {/* <h4>{props.product.name}</h4> */}
                <h4> {name} </h4>
                {/* <br/> */}
                <p> <small> by: {seller} </small> </p>
                <p>${price}</p>
                {/* <br/> */}
                <p> <small> Only {stock} left in stock - order soon</small> </p>
                <button className="main-button"
                    // onClick={props.handleAddProduct}>
                    onClick={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;