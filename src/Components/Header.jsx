import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import VisibilitySensor from "react-visibility-sensor";

class Header extends Component {
    onChange(isVisible) {
        console.log('Home is now %s', isVisible ? 'visible' : 'hidden');
    }

    render() {
        return (
            <VisibilitySensor onChange={this.onChange} partialVisibility offset={{ top: 600 }}>
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