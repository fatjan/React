import React, { Component } from 'react';
// import Home from './pages/Home';
// import App_2 from './pages/App_2';
import App_3 from './pages/App_3';
import './App.css';


class App extends Component {
  render() {
    console.log("Window", window.location);
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        {/* <Home /> */}
        <App_3 />
        {/* <App_2 /> */}
      </div>
    );
  }
}

export default App;
