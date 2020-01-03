import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <Jumbotron bsPrefix="contactJumbo" id="contact">
                <Container>
                    <h1>Contact</h1>
                </Container>
            </Jumbotron>
        )
    }
}

export default Contact;
