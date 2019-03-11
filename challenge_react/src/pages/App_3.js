import React, { Component } from 'react';
import img from '../asset/logo/logo-alterra-academy.png';
import alterra_below from '../asset/logo/logo-alterra-academy-plain.png';
import twitter from '../asset/ico/ico-twitter.png';
import fb from '../asset/ico/ico-facebook.png';
import ig from '../asset/ico/ico-instagram.png';
import './bootstrap.min.css';
import '../asset/css/App_3.css';


class App_3 extends Component {
  render() {
    return (
        <div className="App">
     
        <div className="contacts">
            <div className="kiri d-none d-md-table-cell">
                <img src={require('../asset/logo/logo-alterra-academy-plain@2x.png')} /><br/>
            </div>

            <div className="kanan">
                <span className="contact"><strong>Contact Us</strong></span><br/>
                <span className="message">Send Us a messege and we will get back to you as soon as possible</span>
                <form>
                    <div>
                        <label for="name">Name<span className="bintang">*</span></label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="name"><img src="assets/img/ATA Batch2 - assetsFrontend(1)/ico/ico-user.png"/></span>
                            </div>
                                <input type="text" className="form-control kotak" id="name" aria-describedby="basic-addon3" />
                        </div>   
                    </div><br/>
                    <label for="email">Email<span className="bintang">*</span></label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="email"><img src="assets/img/ATA Batch2 - assetsFrontend(1)/ico/ico-email.png"/></span>
                            </div>
                        <input type="text" className="form-control kotak" id="email" aria-describedby="basic-addon3" /><br/>
                        </div>
                        <br/><label for="phone-number">Phone Number<span className="bintang">*</span></label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="phone-number"><img src="assets/img/ATA Batch2 - assetsFrontend(1)/ico/ico-phone.png" width= "12px"/></span>
                            </div>
                        <input type="text" className="form-control kotak" id="phone-number" aria-describedby="basic-addon3" /><br/>
                        </div>
                    <br/><label for="national">Nationality</label>
                        <select className="form-control" id="national">
                            <option>Indonesia</option>
                            <option>Malaysia</option>
                            <option>Singapore</option>
                            <option>Thailiand</option>
                        </select>
                    <br/><label for="messege">Message</label>
                        <textarea className="form-control" rows="5" id="message" placeholder="Send a new message ..."></textarea><br/>
                        <button type="button" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
      
        </div>
    );
  }
}

export default App_3;
