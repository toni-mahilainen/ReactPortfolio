import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <section>
                <Jumbotron bsPrefix="contactJumbo" id="contact">
                    <Container>
                        <h1>Contact</h1>
                    </Container>
                </Jumbotron>
            </section>
        )
    }
}

export default Contact;
