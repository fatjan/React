import React, { Component } from 'react';

class ContactRight extends Component {
    render() {
      return (
           <div className="kanan">
                <span className="contact"><strong>Contact Us</strong></span><br/>
                <span className="message">Send Us a messege and we will get back to you as soon as possible</span>
                <form>
                    <div>
                        <label for="name">Name<span className="bintang">*</span></label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="name"><img src={require('../asset/ico/ico-user.png')}/></span>
                            </div>
                                <input type="text" className="form-control kotak" id="name" aria-describedby="basic-addon3" />
                        </div>   
                    </div><br/>
                    <label for="email">Email<span className="bintang">*</span></label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="email"><img src={require('../asset/ico/ico-email.png')} /></span>
                            </div>
                        <input type="text" className="form-control kotak" id="email" aria-describedby="basic-addon3" /><br/>
                        </div>
                        <br/><label for="phone-number">Phone Number<span className="bintang">*</span></label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="phone-number"><img src={require('../asset/ico/ico-phone.png')} width= "12px"/></span>
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
         );
        }
      }
      
export default ContactRight;