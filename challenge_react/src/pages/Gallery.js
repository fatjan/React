import React, { Component } from 'react';
import Header from '../Components/Header';
import ContentGallery from '../Components/Content_Gallery';
import Footer from '../Components/Footer';
import './bootstrap.min.css';
import '../asset/css/gallery.css';


class Gallery extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContentGallery />
        <Footer />
    </div>
    );
  }
}

export default Gallery;
