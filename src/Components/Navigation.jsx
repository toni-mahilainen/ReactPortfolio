import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav id="navbar" className="navbar sticky-top justify-content-center">
                <ul className="nav">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#iAm">I AM</a></li>
                    <li><a href="#iCan">I CAN</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;