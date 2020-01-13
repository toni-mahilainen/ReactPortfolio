import React, { Component } from 'react';

class Navigation extends Component {
    highlightNav(e) {
        // klikattu elementti muuttujaan
        let clicked = e.currentTarget;
        
        // luodaan a elementeistä kokoelma
        var btnContainer = document.getElementById("nav");
        var aCollection = btnContainer.getElementsByTagName("a");

        // poistetaan kaikista a elementeistä luokka atribuutti
        for (var i = 0; i < aCollection.length; i++) {
            aCollection[i].removeAttribute("class");
        }

        // lisätään klikattuun luokka atribuutti 'active'-arvolla
        clicked.setAttribute("class", "active");
    }

    render() {
        return (
            <nav id="navbar" className="navbar sticky-top justify-content-center">
                <ul className="nav" id="nav">
                    <li><a href="#home" className="active" onClick={this.highlightNav}>HOME</a></li>
                    <li><a href="#iAm" onClick={this.highlightNav}>I AM</a></li>
                    <li><a href="#iCan" onClick={this.highlightNav}>I CAN</a></li>
                    <li><a href="#contact" onClick={this.highlightNav}>CONTACT</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;