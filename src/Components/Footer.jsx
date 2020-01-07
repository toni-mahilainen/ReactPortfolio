import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Jumbotron bsPrefix="footerJumbo">
                <Container id="footerLeft">
                    <h1>Footer</h1>
                </Container>
                <Container id="footerRight">
                    <h1>Footer</h1>
                </Container>
            </Jumbotron>
        )
    }
}

export default Footer;
