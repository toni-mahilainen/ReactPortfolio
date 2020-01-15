import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import myPicture from '../myPicture.jpg';
import VisibilitySensor from "react-visibility-sensor";

class Details extends Component {
    render() {
        if (this.props.detailsRequest === "basic") {
            return (
                <div id="infoDiv">
                    <p>
                        Olen 32 vuotias kihloissa oleva Forssalainen mies. Asun tyttöystäväni kanssa Forssan Vieremän asuinalueella rivitalo asunnossa jonka ostimme vuonna 2016 heinäkuussa.
                        Työntekijänä olen tehokas, järjestelmällinen, oma-aloitteinen ja hoidan työni loppuun.
                        Omaan rauhallisen luonteen, loogisen ajattelutavan sekä kyvyt ongelmien ratkaisuun myös kiireellisissä tilanteissa.
                        Pidän haasteellisista ja monipuolisista työtehtävistä, olen nopea oppimaan uusia asioita ja haluan kehittyä työssäni.
                    </p>
                </div>
            )
        } else if (this.props.detailsRequest === "education") {
            return (
                <div id="infoDiv">
                <table className="iamTable">
                <thead>
                    <tr>
                        <th className="thEducation">Koulu</th>
                        <th className="thEducation">Lisätiedot</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="tdEducation">Careeria Porvoo</td>
                        <td className="tdEducation">Datanomi / Ohjelmistotuotanto</td>
                    </tr>
                    <tr>
                        <td className="tdEducation">Kosken Lukio</td>
                        <td className="tdEducation">Kursseja suoritettu 52 kpl</td>
                    </tr>
                    <tr>
                        <td className="tdEducation">Kosken seudun ala- ja yläaste</td>
                        <td className="tdEducation">Peruskoulu</td>
                    </tr>
                </tbody>
            </table>
                </div>
            )
        } else if (this.props.detailsRequest === "work") {
            return (
                <div id="infoDiv">
                    <table className="iamTable">
                        <thead>
                            <tr>
                                <th className="thWork">Yritys</th>
                                <th className="thWork">Aika</th>
                                <th className="thWork">Ammattinimike</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="tdWork">HK Scan Finland Oy</td>
                                <td className="tdWork">05/2016 - 09/2019</td>
                                <td className="tdWork">Varastotyöntekijä</td>
                            </tr>
                            <tr>
                                <td className="tdWork">Pakastamo Oy</td>
                                <td className="tdWork">02/2008 - 05/2016</td>
                                <td className="tdWork">Varastotyöntekijä</td>
                            </tr>
                            <tr>
                                <td className="tdWork">Nokia Oy</td>
                                <td className="tdWork">09/2006 - 02/2008</td>
                                <td className="tdWork">Elektroniikka-asentaja</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        } else if (this.props.detailsRequest === "language") {
            return (
                <div id="infoDiv">
                    <p>
                        Finnish, English
                    </p>
                </div>
            )
        } else {
            return (
                <div id="infoDiv">
                    <p>
                        Something went wrong! Please reload the page.
                    </p>
                </div>
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

    onChange(isVisible) {
        // jos sivun osa riittävästi näkyvissä, lisätään luokkamääritys a tagiin
        let a = document.getElementById("aIam");
        isVisible ? a.setAttribute("class", "active") : a.removeAttribute("class");
    }

    render() {
        return (
            <VisibilitySensor onChange={this.onChange} partialVisibility offset={{ top: 350, bottom: 350 }}>
                <section id="iAm">
                    <Jumbotron bsPrefix="iamJumbo">
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
                            <table className="iamTable">
                                <tbody>
                                    <tr>
                                        <td className="tdHeader"><h2>Basic knowledge</h2></td>
                                        <td className="tdButton"><button className="showDetailsBtn" onClick={this.ShowHideDetails}><span className="fas fa-chevron-down" id="basic"></span></button></td>
                                    </tr>
                                    <tr>
                                        <td className="tdInfoDiv">{this.state.BasicVisible ? <Details detailsRequest="basic" /> : null}</td>
                                    </tr>
                                    <tr>
                                        <td className="tdHeader"><h2>Education</h2></td>
                                        <td className="tdButton"><button className="showDetailsBtn" onClick={this.ShowHideDetails}><span className="fas fa-chevron-down" id="education"></span></button></td>
                                    </tr>
                                    <tr>
                                        <td className="tdInfoDiv">{this.state.EducVisible ? <Details detailsRequest="education" /> : null}</td>
                                    </tr>
                                    <tr>
                                        <td className="tdHeader"><h2>Work history</h2></td>
                                        <td className="tdButton"><button className="showDetailsBtn" onClick={this.ShowHideDetails}><span className="fas fa-chevron-down" id="work"></span></button></td>
                                    </tr>
                                    <tr>
                                        <td className="tdInfoDiv">{this.state.WorkVisible ? <Details detailsRequest="work" /> : null}</td>
                                    </tr>
                                    <tr>
                                        <td className="tdHeader"><h2>Language skills</h2></td>
                                        <td className="tdButton"><button className="showDetailsBtn" onClick={this.ShowHideDetails}><span className="fas fa-chevron-down" id="language"></span></button></td>
                                    </tr>
                                    <tr>
                                        <td className="tdInfoDiv">{this.state.LangVisible ? <Details detailsRequest="language" /> : null}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Container>
                    </Jumbotron>
                </section>
            </VisibilitySensor>
        )
    }
}

export default IAm;