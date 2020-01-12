import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Jumbotron bsPrefix="footerJumbo">
                <Container id="footerLeft">
                    <address>
                        Toni Mahilainen<br/>
                        +358 (0) 40 0195 461<br/>
                        tomima87@gmail.com<br/>
                        Forssa, Finland
                    </address>
                    <h5>@ Copyright 2020 Toni Mahilainen <span className="fas fa-ellipsis-v"></span> Design by Toni Mahilainen</h5>
                </Container>
            </Jumbotron>
        )
    }
}

export default Footer;
