import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import IAm from "./IAm";
import ICan from "./ICan";
import Contact from "./Contact";
import "../App.css";
import Navigation from "./Navigation";

class App extends Component {
    componentDidMount() {
        var nav = document.getElementById("navbar");

        window.onscroll = function () {
            if (window.pageYOffset > 75) {
                nav.style.background = "rgba(51,3,0,0.4)"
            } else {
                nav.style.background = "#333";
                nav.style.opacity = "1.0";
            }
        }

        // alert("Message from developer: 'Under construction!'")
    }

    onChange(isVisible) {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    }

    render() {
        return (
            <div id="home">
                <Navigation />
                <Header />
                <IAm />
                <ICan />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default App;