import React from 'react';
import image from '../../images/Eror.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <h3 class="text-danger">Nothing Found</h3>
            <img className="error-img" src={image} alt="" />
        </div>
    );
};

export default NotFound;