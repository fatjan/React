import React, { Component } from 'react';
import Header from '../Components/Header';
import ContentAbout from '../Components/Content_About';
import Footer from '../Components/Footer';
import '../asset/css/about.css';

class About extends Component {
    render() {
      return (
        <div>   
        <Header />
        <ContentAbout />
        <Footer />
        
        </div>

        );
    }
}

export default About;