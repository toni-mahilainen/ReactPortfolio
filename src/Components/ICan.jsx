import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

class ICan extends Component {
    render() {
        return (
            <Jumbotron bsPrefix="iCanJumbo" id="iCan">
                <Container>
                    <h1>I Can</h1>
                </Container>
            </Jumbotron>
        )
    }
}

export default ICan;
