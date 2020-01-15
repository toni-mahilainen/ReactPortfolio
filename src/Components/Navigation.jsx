import React, { Component } from 'react';

class Navigation extends Component {
    highlightNav(e) {
        // klikattu elementti muuttujaan
        let clicked = e.currentTarget;
        
        // luodaan a elementeistä kokoelma
        let btnContainer = document.getElementById("nav");
        let aCollection = btnContainer.getElementsByTagName("a");

        // poistetaan kaikista a elementeistä luokka atribuutti
        for (let i = 0; i < aCollection.length; i++) {
            aCollection[i].removeAttribute("class");
        }

        // lisätään klikattuun luokka atribuutti 'active'-arvolla
        clicked.setAttribute("class", "active");
    }

    render() {
        return (
            <nav id="navbar" className="navbar sticky-top justify-content-center">
                <ul className="nav" id="nav">
                    <li><a id="aHome" href="#home" className="active" onClick={this.highlightNav}>HOME</a></li>
                    <li><a id="aIam" href="#iAm" onClick={this.highlightNav}>I AM</a></li>
                    <li><a id="aIcan" href="#iCan" onClick={this.highlightNav}>I CAN</a></li>
                    <li><a id="aContact" href="#contact" onClick={this.highlightNav}>CONTACT</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;