import React, { Component } from 'react';
import img from '../asset/logo/logo-alterra-academy.png';

class Header extends Component {
    render() {
      return (
        <div className="navbar-top">
              <div className="container-fluid">
                  <div className="row" id="row1">
                          <div className="col-md-6 col-12">
                              <img className="logo-al" src={img} />
                          </div>
                          <div className="col-md-6 col-12 link">          
                              <a href="about.html" id="About">ABOUT</a>
                              <a href="gallery.html" id="Gallery">GALLERY</a>
                              <a href="contact.html" id="Contact">CONTACT</a>
                          </div>
                  </div>
              </div>
        </div>
        );
    }
}

export default Header;