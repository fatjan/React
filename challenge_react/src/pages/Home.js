import React, { Component } from 'react';
import img from '../asset/logo/logo-alterra-academy.png';
import fajri from '../asset/img/fajri.jpg';
import icon1 from '../asset/ico/ico-location.png';
import alterra_below from '../asset/logo/logo-alterra-academy-plain.png';
import twitter from '../asset/ico/ico-twitter.png';
import fb from '../asset/ico/ico-facebook.png';
import ig from '../asset/ico/ico-instagram.png';
import '../asset/css/about.css';

class Home extends Component {
    render() {
      return (
        <div>
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
     

        <div className="section-header">
                    <img className="foto" src={fajri} /><br/>
                    <br/>
                    <h1><strong>Ahmad Fajri S.</strong></h1>
                    <span>
                        <img src={icon1} />
                        Malang, East Java, Indonesia
                    </span><br/><br/>
                    <h2>Frontend Dev, UI/UX and Design </h2><br/>
                    <button className="btn btn-primary" role="button" id="download">Download CV</button>
        </div>
        <div className="kotak">
                <div className="container">
                        <div className="row" id="content">
                            <div className="col-md-6 col-12" id="About Me">
                                <h2>About Me</h2>
                                <p>Hi! I am <strong>Ahmad Fajri S.</strong>, I work as a <em>Front-end Developer</em> at <span1><strong>Alterra Group</strong></span1>. </p>
                                <p>Front-end Developer are constructive work websites use HTML, CSS, and JavaScript.</p>
                                <p>Front-end Developer are the people who make it design and develop the design until become a website that can run.</p>
                            </div>
                            <div className="col-md-6 col-12" id="Information">
                                <h2>Information</h2>
                                <table className="table">
                                        <tbody>
                                        <tr>
                                            <td><b>Age</b></td>
                                            <td>: 23th</td>
                                        </tr>
                                        <tr>
                                            <td><b>Email</b></td>
                                            <td>: fajri@alphatech.id</td>
                                        </tr>
                                        <tr>
                                            <td><b>Address</b></td>
                                            <td>: Jl. Tidar Utara No. 23, Karang Besuki, Malang</td>
                                        </tr>
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                </div>
        </div>
        <div className="navbar-bottom">
            <div className="container-fluid">
                <div className="row akhir">
                    <div className="col-md-9 col-12">
                        <img id="alterra-bawah"
                        src={alterra_below} />
                        <br/><br/>
                        <span>&copy; Copyright Alterra Group 2019</span>
                    </div>
                
                    <div className="col-md-3 col-12">
                        <h2>Follow Us On</h2>
                        <table>
                            <tr>
                                <td className="table-kiri"><img src={fb} /></td>
                                <td>
                                    <a href="https://www.facebook.com/ahmad.fajris.9" target="_blank" id="fb">Facebook</a></td>
                            </tr>
                            <tr>
                                <td className="table-kiri"><img src={twitter} /></td>
                                <td>Twitter</td>
                            </tr>
                            <tr>
                                <td className="table-kiri"><img src={ig} /></td>       
                                <td>Instagram</td>
                            </tr> 
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>

        );
    }
}

export default Home;