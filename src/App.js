import React, { Component} from 'react';
import Navbar from "./Component/Navbar";
import Main from "./section/Main";
import About from "./section/About";
import Work from "./section/Work";
import Contact from "./section/Contact";


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Main/>
      <About/>
      <Work/>
      <Contact/>

      </div>
    )
  }
}

export default App;
