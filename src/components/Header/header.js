import React from 'react';
import logo from '../../images/Punjab-Kings.jpg';
// "../"  means go one file back/up.
import './header.css'
// "./"  means on the same file.

const header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""></img>
            <nav>
                <a href="/players">Players</a>
                <a href="/oldteam">Your Team</a>
                <a href="/newteam">Your New Players</a>
            </nav>


        </div>
    );
};

export default header;