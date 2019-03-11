import React, { Component } from 'react';
import alterra_below from '../asset/logo/logo-alterra-academy-plain.png';
import twitter from '../asset/ico/ico-twitter.png';
import fb from '../asset/ico/ico-facebook.png';
import ig from '../asset/ico/ico-instagram.png';

class Footer extends Component {
    render() {
      return (

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
        );
    }
}

export default Footer;