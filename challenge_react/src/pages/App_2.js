import React, { Component } from 'react';
import img from '../asset/logo/logo-alterra-academy.png';
import alterra_below from '../asset/logo/logo-alterra-academy-plain.png';
import twitter from '../asset/ico/ico-twitter.png';
import fb from '../asset/ico/ico-facebook.png';
import ig from '../asset/ico/ico-instagram.png';
import gallery from '../asset/ico/ico-gallery.png';
import jake from '../asset/img/jake-allison-1322894-unsplash.jpg';
import './bootstrap.min.css';
import '../asset/css/App_2.css';


class App_2 extends Component {
  render() {
    return (
      <div className="App">

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
     
        <div className="container tengah">
        <div className="row" id="row2">
            <div className="col-md-12 col-12">
                <img src={gallery} />
                <span>GALLERY</span>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-12">
                <a title="Morning beach on Malang Island (Fajri S.)"> 
                    <img src={jake} className="img-gallery" />
                </a>
                <a title="On the road among the rocky mountains, Batu. (Fajri S.)"> 
                        <img src={require('../asset/img/jay-lee-1323073-unsplash.jpg')} className="img-gallery" />
                    </a>
            </div>
            <div className="col-md-4 col-12">
                <a title="Alone in the beach, hazy. South Sulawesi. (Fajri S.)">
                <img src={require('../asset/img/nic-yee-1321843-unsplash.jpg')} className="img-gallery" /></a>
                <a title="Baking during weekend: almond pie. (Fajri S.)">
                <img src={require('../asset/img/nordwood-themes-1319985-unsplash.jpg')} className="img-gallery" />
                </a>
            </div>
            <div className="col-md-4 col-12">
                <a title="Work situation (Fajri S.)">
                <img src={require('../asset/img/phil-desforges-1322844-unsplash.jpg')} className="img-gallery" />
                </a>
                <a title="A winter night in Spain (Fajri S.)">
                <img src={require('../asset/img/ryan-1321510-unsplash.jpg')} className="img-gallery" />
                </a>
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

export default App_2;
