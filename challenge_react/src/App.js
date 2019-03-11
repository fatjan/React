import React, { Component } from 'react';
// import About from './pages/About';
// import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
// import './App.css';
import './asset/css/contact.css';



class App extends Component {
  render() {
    console.log("Window", window.location);
    return (
      <div>
        {/* <About /> */}
        {/* <Gallery /> */}
        <Contact />
      </div>
    );
  }
}

export default App;
