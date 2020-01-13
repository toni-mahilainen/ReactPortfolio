import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import axios from 'axios';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            Name: "",
            Email: "",
            Subject: "",
            Message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.contactToBackend = this.contactToBackend.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.contactToBackend();
    }

    clearInputs() {
        let inputs = document.getElementsByClassName("contactInput");
        console.log(inputs);

        inputs[0].value = "";
        inputs[1].value = "";
        inputs[2].value = "";
        inputs[3].value = "";
    }

    contactToBackend() {
        let uri = "https://emailsendercore.azurewebsites.net//api/email";

        const messageObj = {
            name: this.state.Name,
            emailAddress: this.state.Email,
            subject: this.state.Subject,
            message: this.state.Message
        };

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        axios.post(uri, messageObj, headers
        ).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                // alertin tilalle viesti käyttäjällä käyttöliittymään
                alert("Email sent, awesome!");
                this.clearInputs();
            } else {
                alert("Oops, something went wrong. Try again")
            }
        })
    }

    handleChangeInput(input) {
        let inputField = input.target.id;
        let nameValue = input.target.value;
        let emailValue = input.target.value;
        let subjectValue = input.target.value;
        let messageValue = input.target.value;

        switch (inputField) {
            case "name":
                this.setState({
                    Name: nameValue
                });
                break;

            case "email":
                this.setState({
                    Email: emailValue
                });
                break;

            case "subject":
                this.setState({
                    Subject: subjectValue
                });
                break;

            case "message":
                this.setState({
                    Message: messageValue
                });
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <section id="contact">
                <Jumbotron bsPrefix="contactJumbo">
                    <Container id="contactFormTainer">
                        <h2>Contact me with email...</h2>
                        <div id="contactForm">
                            <form onSubmit={this.handleSubmit}>
                                Name<br />
                                <input type="text" className="contactInput" id="name" onChange={this.handleChangeInput}></input><br />
                                Email<br />
                                <input type="text" className="contactInput" id="email" onChange={this.handleChangeInput}></input><br />
                                Subject<br />
                                <input type="text" className="contactInput" id="subject" onChange={this.handleChangeInput}></input><br />
                                Message<br />
                                <textarea type="text" className="contactInput" id="message" onChange={this.handleChangeInput}></textarea><br />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </Container>
                    <Container id="contactInfo">
                        <h2>...or in social media</h2>
                        <div id="socialMediaIcons">
                            <a href="https://www.linkedin.com/in/toni-mahilainen-a56b1b157/" target="_blank" rel="noopener noreferrer"><span className="fab fa-linkedin"></span></a>
                            <a href="https://github.com/point-toni-mahilainen" target="_blank" rel="noopener noreferrer"><span className="fab fa-github"></span></a>
                            <a href="https://www.facebook.com/toni.mahilainen" target="_blank" rel="noopener noreferrer"><span className="fab fa-facebook"></span></a>
                            <a href="https://www.instagram.com/toni_mahilainen/" target="_blank" rel="noopener noreferrer"><span className="fab fa-instagram"></span></a>
                        </div>
                    </Container>
                </Jumbotron>
            </section>
        )
    }
}

export default Contact;
