import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import myPicture from '../myPicture.jpg';

class Details extends Component {
    render() {
        if (this.props.detailsRequest === "basic") {
            return (
                <p>
                    Tähän Basic info
                </p>
            )
        } else if (this.props.detailsRequest === "education") {
            return (
                <p>
                    Tähän Education info
                </p>
            )
        } else if (this.props.detailsRequest === "work") {
            return (
                <p>
                    Tähän Work info
                </p>
            )
        } else if (this.props.detailsRequest === "language") {
            return (
                <p>
                    Tähän Language info
                </p>
            )
        } else {
            return (
                <p>
                    Something went wrong! Please reload the page.
                </p>
            )
        }
    }
}

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
            EmailStudent: "toni.mahilainen@student.careeria.fi",
            BasicVisible: false,
            EducVisible: false,
            WorkVisible: false,
            LangVisible: false
        };
        this.AgeCalc = this.AgeCalc.bind(this);
        this.ShowHideDetails = this.ShowHideDetails.bind(this);
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

    ShowHideDetails(btn) {
        let btnId = btn.target.id;

        // Painikkeen perusteella näytetään/piilotetaan oikeat lisätiedot
        if (btnId === "basic") {
            switch (this.state.BasicVisible) {
                case false:
                    this.setState({
                        BasicVisible: true,
                    });
                    break;

                case true:
                    this.setState({
                        BasicVisible: false
                    });
                    break;

                default:
                    alert("Error! Please reload the page.")
                    break;
            }
        } else if (btnId === "education") {
            switch (this.state.EducVisible) {
                case false:
                    this.setState({
                        EducVisible: true,
                    });
                    break;

                case true:
                    this.setState({
                        EducVisible: false,
                    });
                    break;

                default:
                    alert("Error! Please reload the page.")
                    break;
            }
        } else if (btnId === "work") {
            switch (this.state.WorkVisible) {
                case false:
                    this.setState({
                        WorkVisible: true,
                    });
                    break;

                case true:
                    this.setState({
                        WorkVisible: false
                    });
                    break;

                default:
                    alert("Error! Please reload the page.")
                    break;
            }
        } else if (btnId === "language") {
            switch (this.state.LangVisible) {
                case false:
                    this.setState({
                        LangVisible: true,
                    });
                    break;

                case true:
                    this.setState({
                        LangVisible: false
                    });
                    break;

                default:
                    alert("Something went wrong! Please reload the page.")
                    break;
            }
        }
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
                        <div id="basicKnowledge">
                            <h2>Basic knowledge</h2>
                            {this.state.BasicVisible ? <Details detailsRequest="basic" /> : null}
                            <button className="showDetailsBtn" onClick={this.ShowHideDetails}><span className="fas fa-chevron-down" id="basic"></span></button>
                        </div>
                        <div id="education">
                            <h2>Education</h2>
                            {this.state.EducVisible ? <Details detailsRequest="education" /> : null}
                            <button className="showDetailsBtn" onClick={this.ShowHideDetails}><span className="fas fa-chevron-down" id="education"></span></button>
                        </div>
                        <div id="workHistory">
                            <h2>Work history</h2>
                            {this.state.WorkVisible ? <Details detailsRequest="work" /> : null}
                            <button className="showDetailsBtn" onClick={this.ShowHideDetails}><span className="fas fa-chevron-down" id="work"></span></button>
                        </div>
                        <div id="languageSkills">
                            <h2>Language skills</h2>
                            {this.state.LangVisible ? <Details detailsRequest="language" /> : null}
                            <button className="showDetailsBtn" onClick={this.ShowHideDetails}><span className="fas fa-chevron-down" id="language"></span></button>
                        </div>
                    </Container>
                </Jumbotron>
            </section>
        )
    }
}

export default IAm;