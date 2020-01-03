import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Jumbotron bsPrefix="headerJumbo">
                <Container>
                    <h1>My name is Toni Mahilainen...</h1>
                    <p>...and this is my React based portfolio!</p>
                </Container>
            </Jumbotron>
        )
    }
}

export default Header;