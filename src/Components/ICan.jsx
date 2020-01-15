import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import VisibilitySensor from "react-visibility-sensor";
import cSharp from '../csharp_api-900x0.jpg';

class Examples extends Component {
    render() {
        if (this.props.exampleRequest === "csharp") {
            return (
                <Container id="iCanExamples">
                    <h1>C#</h1>
                    <div className="skillLevelBar">
                        <span className="skillLevel" style={{ width: "40%" }}><h5>Skill level</h5></span>
                    </div>
                    <Container id="exampleWorks" >
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <Image src={cSharp} roundedCircle />
                            </Col>
                            <Col md="auto">
                                <Image src={cSharp} roundedCircle />
                            </Col>
                            <Col md="auto">
                                <Image src={cSharp} roundedCircle />
                            </Col>
                        </Row>
                    </Container>
                </Container>
            )
        } else if (this.props.exampleRequest === "htmlcss") {
            return (
                <Container id="iCanExamples">
                    <h1>HTML5 - CSS3</h1>
                    <div className="skillLevelBar">
                        <span className="skillLevel" style={{ width: "60%" }}><h5>Skill level</h5></span>
                    </div>
                </Container>
            )
        } else if (this.props.exampleRequest === "javascript") {
            return (
                <Container id="iCanExamples">
                    <h1>JavaScript - TypeScript - jQuery</h1>
                    <div className="skillLevelBar">
                        <span className="skillLevel" style={{ width: "40%" }}><h5>Skill level</h5></span>
                    </div>
                </Container>
            )
        } else if (this.props.exampleRequest === "bootstrap") {
            return (
                <Container id="iCanExamples">
                    <h1>Bootstrap</h1>
                    <div className="skillLevelBar">
                        <span className="skillLevel" style={{ width: "30%" }}><h5>Skill level</h5></span>
                    </div>
                </Container>
            )
        } else if (this.props.exampleRequest === "mvc") {
            return (
                <Container id="iCanExamples">
                    <h1>ASP.NET MVC</h1>
                    <div className="skillLevelBar">
                        <span className="skillLevel" style={{ width: "40%" }}><h5>Skill level</h5></span>
                    </div>
                </Container>
            )
        } else if (this.props.exampleRequest === "core") {
            return (
                <Container id="iCanExamples">
                    <h1>ASP.NET Core</h1>
                    <div className="skillLevelBar">
                        <span className="skillLevel" style={{ width: "70%" }}><h5>Skill level</h5></span>
                    </div>
                </Container>
            )
        } else if (this.props.exampleRequest === "sql") {
            return (
                <Container id="iCanExamples">
                    <h1>SQL Server</h1>
                    <div className="skillLevelBar">
                        <span className="skillLevel" style={{ width: "40%" }}><h5>Skill level</h5></span>
                    </div>
                </Container>
            )
        } else if (this.props.exampleRequest === "reactnode") {
            return (
                <Container id="iCanExamples">
                    <h1>React.js - Node.js</h1>
                    <div className="skillLevelBar">
                        <span className="skillLevel" style={{ width: "60%" }}><h5>Skill level</h5></span>
                    </div>
                </Container>
            )
        } else if (this.props.exampleRequest === "xamarin") {
            return (
                <Container id="iCanExamples">
                    <h1>Xamarin Forms</h1>
                    <div className="skillLevelBar">
                        <span className="skillLevel" style={{ width: "20%" }}><h5>Skill level</h5></span>
                    </div>
                </Container>
            )
        } else if (this.props.exampleRequest === "azure") {
            return (
                <Container id="iCanExamples">
                    <h1>Azure</h1>
                    <div className="skillLevelBar">
                        <span className="skillLevel" style={{ width: "30%" }}><h5>Skill level</h5></span>
                    </div>
                </Container>
            )
        } else if (this.props.exampleRequest === "github") {
            return (
                <Container id="iCanExamples">
                    <h1>GitHub</h1>
                    <div className="skillLevelBar">
                        <span className="skillLevel" style={{ width: "30%" }}><h5>Skill level</h5></span>
                    </div>
                </Container>
            )
        } else {
            return (
                <Container id="iCanExamples">
                    <h1>Something went wrong! Please reload the page.</h1>
                </Container>
            )
        }
    }
}

class ICan extends Component {
    constructor() {
        super();
        this.state = {
            CSharpVisible: false,
            HtmlCssVisible: false,
            JavascriptVisible: false,
            BootstrapVisible: false,
            MvcVisible: false,
            CoreVisible: false,
            SqlVisible: false,
            ReactNodeVisible: false,
            XamarinVisible: false,
            AzureVisible: false,
            GitHubVisible: false,
            ExampleRequestState: ""
        };
        this.ShowHideExamples = this.ShowHideExamples.bind(this);
    }

    ShowHideExamples(btn) {
        this.setState({
            CSharpVisible: false,
            HtmlCssVisible: false,
            JavascriptVisible: false,
            BootstrapVisible: false,
            MvcVisible: false,
            CoreVisible: false,
            SqlVisible: false,
            ReactNodeVisible: false,
            XamarinVisible: false,
            AzureVisible: false,
            GitHubVisible: false
        });

        let btnId = btn.target.id;
        console.log(btnId);

        // Painikkeen perusteella näytetään/piilotetaan oikeat lisätiedot
        if (btnId === "csharp") {
            switch (this.state.CSharpVisible) {
                case false:
                    this.setState({
                        CSharpVisible: true,
                        ExampleRequestState: "csharp"
                    });
                    break;

                case true:
                    this.setState({
                        CSharpVisible: false
                    });
                    break;

                default:
                    alert("Error! Please reload the page.")
                    break;
            }
        } else if (btnId === "htmlcss") {
            switch (this.state.HtmlCssVisible) {
                case false:
                    this.setState({
                        HtmlCssVisible: true,
                        ExampleRequestState: "htmlcss"
                    });
                    break;

                case true:
                    this.setState({
                        HtmlCssVisible: false,
                    });
                    break;

                default:
                    alert("Error! Please reload the page.")
                    break;
            }
        } else if (btnId === "javascript") {
            switch (this.state.JavascriptVisible) {
                case false:
                    this.setState({
                        JavascriptVisible: true,
                        ExampleRequestState: "javascript"
                    });
                    break;

                case true:
                    this.setState({
                        JavascriptVisible: false,
                    });
                    break;

                default:
                    alert("Error! Please reload the page.")
                    break;
            }
        } else if (btnId === "bootstrap") {
            switch (this.state.BootstrapVisible) {
                case false:
                    this.setState({
                        BootstrapVisible: true,
                        ExampleRequestState: "bootstrap"
                    });
                    break;

                case true:
                    this.setState({
                        BootstrapVisible: false
                    });
                    break;

                default:
                    alert("Error! Please reload the page.")
                    break;
            }
        } else if (btnId === "mvc") {
            switch (this.state.MvcVisible) {
                case false:
                    this.setState({
                        MvcVisible: true,
                        ExampleRequestState: "mvc"
                    });
                    break;

                case true:
                    this.setState({
                        MvcVisible: false
                    });
                    break;

                default:
                    alert("Something went wrong! Please reload the page.")
                    break;
            }
        } else if (btnId === "core") {
            switch (this.state.CoreVisible) {
                case false:
                    this.setState({
                        CoreVisible: true,
                        ExampleRequestState: "core"
                    });
                    break;

                case true:
                    this.setState({
                        CoreVisible: false
                    });
                    break;

                default:
                    alert("Something went wrong! Please reload the page.")
                    break;
            }
        } else if (btnId === "sql") {
            switch (this.state.SqlVisible) {
                case false:
                    this.setState({
                        SqlVisible: true,
                        ExampleRequestState: "sql"
                    });
                    break;

                case true:
                    this.setState({
                        SqlVisible: false
                    });
                    break;

                default:
                    alert("Something went wrong! Please reload the page.")
                    break;
            }
        } else if (btnId === "reactnode") {
            switch (this.state.ReactNodeVisible) {
                case false:
                    this.setState({
                        ReactNodeVisible: true,
                        ExampleRequestState: "reactnode"
                    });
                    break;

                case true:
                    this.setState({
                        ReactNodeVisible: false
                    });
                    break;

                default:
                    alert("Something went wrong! Please reload the page.")
                    break;
            }
        } else if (btnId === "xamarin") {
            switch (this.state.XamarinVisible) {
                case false:
                    this.setState({
                        XamarinVisible: true,
                        ExampleRequestState: "xamarin"
                    });
                    break;

                case true:
                    this.setState({
                        XamarinVisible: false
                    });
                    break;

                default:
                    alert("Something went wrong! Please reload the page.")
                    break;
            }
        } else if (btnId === "azure") {
            switch (this.state.AzureVisible) {
                case false:
                    this.setState({
                        AzureVisible: true,
                        ExampleRequestState: "azure"
                    });
                    break;

                case true:
                    this.setState({
                        AzureVisible: false
                    });
                    break;

                default:
                    alert("Something went wrong! Please reload the page.")
                    break;
            }
        } else if (btnId === "github") {
            switch (this.state.GitHubVisible) {
                case false:
                    this.setState({
                        GitHubVisible: true,
                        ExampleRequestState: "github"
                    });
                    break;

                case true:
                    this.setState({
                        GitHubVisible: false
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
        let a = document.getElementById("aIcan");
        isVisible ? a.setAttribute("class", "active") : a.removeAttribute("class");
    }

    render() {
        return (
            <VisibilitySensor onChange={this.onChange} partialVisibility offset={{ top: 350, bottom: 350 }}>
                <section id="iCan">
                    <Jumbotron bsPrefix="iCanJumbo">
                        <Container id="iCanList">
                            <h2>I Can</h2>
                            <ul>
                                <li>C# <button onClick={this.ShowHideExamples}><span className="fas fa-chevron-right" id="csharp"></span></button></li>
                                <li>HTML5 - CSS3 <button onClick={this.ShowHideExamples}><span className="fas fa-chevron-right" id="htmlcss"></span></button></li>
                                <li>JavaScript - TypeScript - jQuery <button onClick={this.ShowHideExamples}><span className="fas fa-chevron-right" id="javascript"></span></button></li>
                                <li>Bootstrap <button onClick={this.ShowHideExamples}><span className="fas fa-chevron-right" id="bootstrap"></span></button></li>
                                <li>ASP.NET MVC <button onClick={this.ShowHideExamples}><span className="fas fa-chevron-right" id="mvc"></span></button></li>
                                <li>ASP.NET Core <button onClick={this.ShowHideExamples}><span className="fas fa-chevron-right" id="core"></span></button></li>
                                <li>SQL Server <button onClick={this.ShowHideExamples}><span className="fas fa-chevron-right" id="sql"></span></button></li>
                                <li>React.js - Node.js <button onClick={this.ShowHideExamples}><span className="fas fa-chevron-right" id="reactnode"></span></button></li>
                                <li>Xamarin Forms <button onClick={this.ShowHideExamples}><span className="fas fa-chevron-right" id="xamarin"></span></button></li>
                                <li>Azure <button onClick={this.ShowHideExamples}><span className="fas fa-chevron-right" id="azure"></span></button></li>
                                <li>GitHub <button onClick={this.ShowHideExamples}><span className="fas fa-chevron-right" id="github"></span></button></li>
                            </ul>
                        </Container>
                        {this.state.CSharpVisible ? <Examples exampleRequest={this.state.ExampleRequestState} /> : null}
                        {this.state.HtmlCssVisible ? <Examples exampleRequest={this.state.ExampleRequestState} /> : null}
                        {this.state.JavascriptVisible ? <Examples exampleRequest={this.state.ExampleRequestState} /> : null}
                        {this.state.BootstrapVisible ? <Examples exampleRequest={this.state.ExampleRequestState} /> : null}
                        {this.state.MvcVisible ? <Examples exampleRequest={this.state.ExampleRequestState} /> : null}
                        {this.state.CoreVisible ? <Examples exampleRequest={this.state.ExampleRequestState} /> : null}
                        {this.state.SqlVisible ? <Examples exampleRequest={this.state.ExampleRequestState} /> : null}
                        {this.state.ReactNodeVisible ? <Examples exampleRequest={this.state.ExampleRequestState} /> : null}
                        {this.state.XamarinVisible ? <Examples exampleRequest={this.state.ExampleRequestState} /> : null}
                        {this.state.AzureVisible ? <Examples exampleRequest={this.state.ExampleRequestState} /> : null}
                        {this.state.GitHubVisible ? <Examples exampleRequest={this.state.ExampleRequestState} /> : null}
                    </Jumbotron>
                </section>
            </VisibilitySensor>
        )
    }
}

export default ICan;
