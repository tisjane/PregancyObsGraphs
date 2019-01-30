import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart.js';
import LineChart from './LineChart.js';


class App extends Component {

  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500
  }

  line_state = {
    data: [
      {a: 1, b: 3, c: 34},
      {a: 2, b: 6, c: 43},
      {a: 3, b: 2, c: 13},
      {a: 4, b: 12, c: 3},
      {a: 5, b: 8, c: 23}
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
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
        </header>

         <BarChart
           height={this.state.height}
           width={this.state.width}
         />
         <LineChart data={this.line_state.data} width={this.state.width} height={this.state.height} />

       </div>
    );
  }
}

export default App;
