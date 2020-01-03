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
                nav.style.background = "transparent";
            } else {
                nav.style.background = "#333";
            }
        }
    }

    render() {
        return (
            <div id="content-wrap">
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