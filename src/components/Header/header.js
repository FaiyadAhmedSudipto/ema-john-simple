import React from 'react';
import logo from '../../images/logo.png';
// "../"  means go one file back/up.
import './header.css'
// "./"  means on the same file.

const header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""></img>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/manage">Manage Inventory here</a>
            </nav>


        </div>
    );
};

export default header;