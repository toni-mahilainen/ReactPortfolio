import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <section>
                <Jumbotron bsPrefix="contactJumbo" id="contact">
                    <Container id="contactFormTainer">
                        <h1>Contact</h1>
                    </Container>
                    <Container id="contactInfo">
                        <h1>Contact</h1>
                    </Container>
                </Jumbotron>
            </section>
        )
    }
}

export default Contact;
