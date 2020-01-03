import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

class IAm extends Component {
    render() {
        return (
            <Jumbotron bsPrefix="iamJumbo" id="iAm">
                <Container>
                    <h1>I´m</h1>
                </Container>
            </Jumbotron>
        )
    }
}

export default IAm;
