import React, { Component } from "react";
import "./App.css";

import Top from "./components/Top";
import VideosContainer from "./containers/VideosContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Cineflix</h2>
        </div>
        <Top />
        <VideosContainer />
      </div>
    );
  }
}

export default App;
