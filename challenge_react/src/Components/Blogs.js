import React, { Component } from 'react';

class Blogs extends Component {
    render() {
      return (
            <div class="card">
            <img class="card-img-top" src={require('../asset/img/ayako.jpeg')} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-text"><strong>Nikahi Rakyat Jelata, Putri Ayako dari Jepang Lepaskan Gelar Kerajaan</strong></h5>
                <p class="card-text">Pernikahan Putri Ayako dan Kei Moriya dilangsungkan lewat upacara tradisional Jepang.</p>
                <span class="updated">Last updated 3 mins ago</span>
            </div>
            </div>
            
            );
    }
}

export default Blogs;