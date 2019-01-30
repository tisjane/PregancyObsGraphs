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
      {a: 1, b: 3},
      {a: 2, b: 6},
      {a: 3, b: 2},
      {a: 4, b: 12},
      {a: 5, b: 8}
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

/*         <BarChart
           height={this.state.width}
           width={this.state.width}
         />*/
         <LineChart  data={this.line_state.data} width={this.state.width} height={this.state.width} />

       </div>
    );
  }
}

export default App;
