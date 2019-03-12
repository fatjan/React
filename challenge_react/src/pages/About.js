import React, { Component } from 'react';
import Header from '../Components/Header';
import Search from '../Components/Search';
import '../asset/css/about.css';
import News from '../Components/News';
import NewsKiri from '../Components/NewsKiri';

class About extends Component {
    render() {
      console.log('tampillllll')
      return (
        <div>   
          <Header />   
            <div className="row">
                <div className="col-md-1 col-sm-1"></div>
                <div className="col-md-4 col-sm-4 kiri">
                  <br/>
                  <Search />
                  <br/>
                  <table> 
                   <tr>
                    <td>
                        <h3 style={{padding: '0 60px 0 0'}}>Todays' Headlines</h3>
                    </td>
                  </tr>
                </table>
                  <NewsKiri />
                </div>  
                <div className="col-md-7 col-sm-7">
                  <br />
                 
                  <News />
                </div>   
            </div>
        </div>
        

        );
    }
}

export default About;