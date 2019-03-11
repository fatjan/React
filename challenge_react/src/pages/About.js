import React, { Component } from 'react';
import Header from '../Components/Header';
import Table from '../Components/Table';
import Search from '../Components/Search';
import Blogs from '../Components/Blogs';
import Blogs1 from '../Components/Blogs1';
import '../asset/css/about.css';

class About extends Component {
    render() {
      return (
        <div>   
          <Header />   
            <div className="row">
                <div className="col-md-1 col-sm-1"></div>
                <div className="col-md-4 col-sm-4 kiri">
                  <br/>
                  <Search />
                  <br/>
                  <Table />
                </div>  
                <div className="col-md-7 col-sm-7">
                  <br />
                  <Blogs />
                  <Blogs1 />
                </div>   
                
            </div>
        </div>
        

        );
    }
}

export default About;