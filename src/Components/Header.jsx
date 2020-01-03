import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Jumbotron bsPrefix="headerJumbo" id="home">
                <Container>
                    <h1>Toni Mahilainen</h1>
                </Container>
            </Jumbotron>
        )
    }
}

export default Header;