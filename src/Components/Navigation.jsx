import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav id="navbar" className="navbar sticky-top justify-content-center">
                <ul className="nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#iAm">I am</a></li>
                    <li><a href="#iCan">I can</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;