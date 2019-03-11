import React, { Component } from 'react';
import gallery from '../asset/ico/ico-gallery.png';
import jake from '../asset/img/jake-allison-1322894-unsplash.jpg';

class ContentGallery extends Component {
    render() {
      return (
        <div>
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
        </div>
        );
    }
}

export default ContentGallery;