import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import myPicture from '../myPicture.jpg';

class IAm extends Component {
    constructor() {
        super();
        this.state = {
            Name: "Toni Mahialinen",
            BirthDate: "September 24 1987",
            Age: 0,
            City: "Forssa",
            Country: "Finland",
            Phone: "+358 (0) 40 0195 461",
            EmailPersonal: "tomima87@gmail.com",
            EmailStudent: "toni.mahilainen@student.careeria.fi"
        };
        this.AgeCalc = this.AgeCalc.bind(this);
    }

    componentDidMount() {
        this.AgeCalc();
    }

    AgeCalc() {
        let dateOfBirth = new Date(this.state.BirthDate);
        let today = new Date();

        let ageMs = today.getTime() - dateOfBirth.getTime();
        let years = Math.floor(ageMs / (1000 * 60 * 60 * 24 * 365.25))

        this.setState({
            Age: years
        });
    }

    render() {
        return (
            <section>
                <Jumbotron bsPrefix="iamJumbo" id="iAm">
                    <Container id="iamLeft">
                        <img src={myPicture} alt="My pic" height="250"></img>
                        <ul>
                            <li><span className="myInfoListHeaders">Name:</span> {this.state.Name}</li>
                            <li><span className="myInfoListHeaders">Birthdate:</span> {this.state.BirthDate}</li>
                            <li><span className="myInfoListHeaders">Age:</span> {this.state.Age}</li>
                            <li><span className="myInfoListHeaders">City:</span> {this.state.City}</li>
                            <li><span className="myInfoListHeaders">Country:</span> {this.state.Country}</li>
                            <li><span className="myInfoListHeaders">Phone:</span> {this.state.Phone}</li>
                            <li><span className="myInfoListHeaders">Personal email:</span> {this.state.EmailPersonal}</li>
                            <li><span className="myInfoListHeaders">Student email:</span> {this.state.EmailStudent}</li>
                        </ul>
                    </Container>
                    <Container id="iamRight">
                        <h1>I´m</h1>
                    </Container>
                </Jumbotron>
            </section>
        )
    }
}

export default IAm;