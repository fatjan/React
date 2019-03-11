import React, { Component } from 'react';

class Blogs1 extends Component {
    render() {
      return (
            <div class="card">
            <img class="card-img-top" src={require('../asset/img/crash.jpg')} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-text"><strong>Ethiopian Airlines: Two men say they missed crashed flight</strong></h5>
                <p class="card-text">A team from the U.S. National Transportation Safety Board (NTSB) is set to arrive at the scene of the Ethiopian Airlines crash Tuesday to assist in investigating what caused it, the U.S. Ambassador to Ethiopia Michael Raynor told CNN.</p>
                <span class="updated">Last updated 29 mins ago</span>
            </div>
            </div>
            
            );
    }
}

export default Blogs1;