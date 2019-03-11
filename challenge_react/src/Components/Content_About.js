import React, { Component } from 'react';
import fajri from '../asset/img/fajri.jpg';
import icon1 from '../asset/ico/ico-location.png';


class ContentAbout extends Component {
    render() {
      return (
        <div>
        <div className="section-header">
                    <img className="foto" src={fajri} /><br/>
                    <br/>
                    <h1><strong>Ahmad Fajri S.</strong></h1>
                    <span>
                        <img src={icon1} />
                        Malang, East Java, Indonesia
                    </span><br/><br/>
                    <h2>Frontend Dev, UI/UX and Design </h2><br/>
                    <button className="btn btn-primary-about" role="button" id="download">Download CV</button>
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
        </div>
        );
    }
}

export default ContentAbout;