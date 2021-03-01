import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './shop.css'
import Product from '../Product/product';
import Cart from '../Cart/cart';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log("Product Added", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    {
                        products.map(productF => <Product
                            handleAddProduct={handleAddProduct}
                            product={productF}></Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                {/* <h3>This is cart</h3>
                <h4>Order Summery: {cart.length}</h4> */}
                <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
// React component names must start with an uppercase letter