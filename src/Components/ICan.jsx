import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

class ICan extends Component {
    render() {
        return (
            <section>
                <Jumbotron bsPrefix="iCanJumbo" id="iCan">
                    <Container>
                        <h1>I Can</h1>
                    </Container>
                </Jumbotron>
            </section>
        )
    }
}

export default ICan;
