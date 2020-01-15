import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import VisibilitySensor from "react-visibility-sensor";

class Header extends Component {
    onChange(isVisible) {
        // jos sivun osa riittävästi näkyvissä, lisätään luokkamääritys a tagiin
        let a = document.getElementById("aHome");
        isVisible ? a.setAttribute("class", "active") : a.removeAttribute("class");
    }

    render() {
        return (
            <VisibilitySensor onChange={this.onChange} partialVisibility offset={{ top: 350 }}>
                <header>
                    <Jumbotron bsPrefix="headerJumbo">
                        <Container>
                            <h1>My name is Toni Mahilainen...</h1>
                            <p>...and this is my React based portfolio!</p>
                        </Container>
                    </Jumbotron>
                </header>
            </VisibilitySensor>
        )
    }
}

export default Header;