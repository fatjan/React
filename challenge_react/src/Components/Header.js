import React, { Component } from 'react';
import img from '../asset/logo/eagle.png';

class Header extends Component {
    render() {
      return (
        <div className="navbar-top" id="ini">
              <div className="container-fluid">
                  <div className="row" id="ini">
                          <div className="col-md-3 col-sm-3">
                              <img className="logo-al" src={img} />
                              <span id="judul_logo">KabarKabar</span>
                          </div>
                          <div className="col-md-6 col-sm-6 link">          
                              <a href="#" id="Sepakbola">Sepak Bola</a>
                              <a href="#" id="Ekonomi">Ekonomi</a>
                              <a href="#" id="Politik">Politik</a>
                              <a href="#" id="Hiburan">Hiburan</a>
                              <a href="#" id="Lainnya">Lainnya</a>
                          </div>
                          <div className="col-md-3 link">
                            <a href="#" id="Masuk">Masuk</a>
                            <a href="#" id="Daftar">Daftar</a>
                            
                          </div>
                  </div>
              </div>
        </div>
        );
    }
}

export default Header;