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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dui ut neque porta gravida.
                        Nullam accumsan arcu ac sapien faucibus maximus. Suspendisse tristique auctor nulla, sit amet auctor mauris scelerisque sed.
                        Donec tempor diam ut urna congue, sit amet semper risus pulvinar. Fusce bibendum porttitor velit. Sed augue lectus, dapibus in ex sed, auctor egestas nulla.
                        Nam in metus rutrum, viverra dui vitae, eleifend ipsum. Etiam finibus sodales nisl, sit amet fringilla elit iaculis id.
                    </p>
                </div>
            )
        } else if (this.props.detailsRequest === "education") {
            return (
                <div id="infoDiv">
                    <p>
                        Pellentesque ac lorem sagittis, dapibus augue id, pretium massa. Aliquam consequat posuere ante elementum sollicitudin.
                        Etiam id nisl augue. Nulla ultricies ornare iaculis. Phasellus neque metus, accumsan in neque eget, congue tristique velit.
                        Nam nec congue ex. Nunc ut auctor urna.
                    </p>
                </div>
            )
        } else if (this.props.detailsRequest === "work") {
            return (
                <div id="infoDiv">
                    <p>
                        Pellentesque ut cursus magna. Nullam sollicitudin rhoncus interdum. Nulla tellus tortor, rhoncus vel egestas eget, euismod eu augue.
                        Sed porta neque quam, non varius quam malesuada quis. Vivamus hendrerit ligula sed lacinia tempus. Cras sit amet pretium felis.
                        Nullam scelerisque libero varius nibh dignissim congue. Vestibulum condimentum ipsum velit, eu vehicula ipsum sodales ut.
                        Ut rutrum bibendum velit, vitae dapibus erat viverra non. Aenean scelerisque at nibh a pharetra. Integer sem metus, porta et massa eu, suscipit rhoncus dui.
                        Aliquam a aliquam nunc, a mollis tortor. Ut et ex diam. Praesent porta molestie ipsum, quis ultricies orci iaculis a.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque sed egestas nulla, sit amet rhoncus ex.
                    </p>
                </div>
            )
        } else if (this.props.detailsRequest === "language") {
            return (
                <div id="infoDiv">
                    <p>
                        Praesent rutrum lacus sit amet bibendum rutrum. Integer vel luctus est, sit amet aliquet mauris. In placerat porttitor consectetur.
                        Ut ac dolor aliquam est fringilla cursus a eu ex. Cras iaculis rhoncus ipsum, non venenatis mi tincidunt ut. Curabitur rhoncus sem a arcu vestibulum, sit amet laoreet quam consequat.
                        In tempor metus neque, quis ultricies quam commodo non. Nulla eu condimentum massa. Nam nec rutrum tortor. Quisque luctus diam ut scelerisque tincidunt.
                        Curabitur blandit, lacus in venenatis eleifend, ligula magna egestas neque, at elementum libero mauris porttitor ligula.
                        Nulla fermentum libero in sem rhoncus, eget euismod libero rutrum. Nam quis risus sed libero dignissim aliquam. Phasellus faucibus tellus auctor, dapibus ante id, lobortis erat.
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
        console.log('I´m is now %s', isVisible ? 'visible' : 'hidden');
    }

    render() {
        return (
            <VisibilitySensor onChange={this.onChange} partialVisibility offset={{top: 600, bottom: 600}}>
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
                            <table id="iamTable">
                                <tbody>
                                    <tr>
                                        <td className="tdHeader"><h2>Basic knowledge</h2></td>
                                        <td className="tdButton"><button className="showDetailsBtn" onClick={this.ShowHideDetails}><span className="fas fa-chevron-down" id="basic"></span></button></td>
                                    </tr>
                                    <tr>
                                        <td>{this.state.BasicVisible ? <Details detailsRequest="basic" /> : null}</td>
                                    </tr>
                                    <tr>
                                        <td className="tdHeader"><h2>Education</h2></td>
                                        <td className="tdButton"><button className="showDetailsBtn" onClick={this.ShowHideDetails}><span className="fas fa-chevron-down" id="education"></span></button></td>
                                    </tr>
                                    <tr>
                                        <td>{this.state.EducVisible ? <Details detailsRequest="education" /> : null}</td>
                                    </tr>
                                    <tr>
                                        <td className="tdHeader"><h2>Work history</h2></td>
                                        <td className="tdButton"><button className="showDetailsBtn" onClick={this.ShowHideDetails}><span className="fas fa-chevron-down" id="work"></span></button></td>
                                    </tr>
                                    <tr>
                                        <td>{this.state.WorkVisible ? <Details detailsRequest="work" /> : null}</td>
                                    </tr>
                                    <tr>
                                        <td className="tdHeader"><h2>Language skills</h2></td>
                                        <td className="tdButton"><button className="showDetailsBtn" onClick={this.ShowHideDetails}><span className="fas fa-chevron-down" id="language"></span></button></td>
                                    </tr>
                                    <tr>
                                        <td>{this.state.LangVisible ? <Details detailsRequest="language" /> : null}</td>
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