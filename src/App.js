import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <h1>Keith Planner</h1>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
