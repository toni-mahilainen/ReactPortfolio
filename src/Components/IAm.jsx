import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

class IAm extends Component {
    render() {
        return (
            <section>
                <Jumbotron bsPrefix="iamJumbo" id="iAm">
                    <Container id="iamLeft">
                        <h1>Testi</h1>
                    </Container>
                    <Container id="iamRight">
                        <h1>Testi</h1>
                    </Container>
                </Jumbotron>
            </section>
        )
    }
}

export default IAm;
