import React, { Component } from 'react';
import ContactRight from '../Components/Contact_Right';
import ContactLeft from '../Components/Contact_Left';



class Contact extends Component {
  render() {
    return (
        <div className="contacts">
            <ContactLeft /> 
            <ContactRight />
        </div>

    );
  }
}

export default Contact;
