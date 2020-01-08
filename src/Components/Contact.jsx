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
    }

    handleSubmit() {
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
            <section>
                <Jumbotron bsPrefix="contactJumbo" id="contact">
                    <Container id="contactFormTainer">
                        <h1>Contact</h1>
                        <form onSubmit={this.handleSubmit}>
                            Name<br />
                            <input type="text" id="name" onChange={this.handleChangeInput}></input><br />
                            Email<br />
                            <input type="text" id="email" onChange={this.handleChangeInput}></input><br />
                            Subject<br />
                            <input type="text" id="subject" onChange={this.handleChangeInput}></input><br />
                            Message<br />
                            <input type="text" id="message" onChange={this.handleChangeInput}></input><br />
                            <button type="submit">Submit</button>
                        </form>
                    </Container>
                    <Container id="contactInfo">
                        <h1>Contact</h1>
                    </Container>
                </Jumbotron>
            </section>
        )
    }
}

export default Contact;
