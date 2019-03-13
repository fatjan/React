import React, { Component } from 'react';
// import Header from '../Components/Header';
import Navigation from '../Components/Navigation';
import Search from '../Components/Search';
import '../asset/css/about.css';
// import News from '../Components/News';
// import News_1 from '../Components/News_1';
import NewsKiri from '../Components/NewsKiri';
import SearchCategory from './SearchEverythingByCategory';
import News_1 from './News_1';

class Home extends Component {
    render() {
      console.log('tampillllll')
      return (
        <div>   
          {/* <Navigation />    */}
            <div className="row">
                <div className="col-md-1 col-sm-1"></div>
                <div className="col-md-4 col-sm-4 kiri">
                  <br/>
                  {/* <Search /> */}
                  <br/><br/>
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
                 
                  <News_1 />
                </div>   
            </div>
            {/* <div className="row">
              <div className="col-md-12">
                <SearchCategory />
              </div>
            </div> */}
        </div>
        

        );
    }
}

export default Home;