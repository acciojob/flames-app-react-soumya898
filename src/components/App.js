import React, { Component, useState } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: '',
      name2: '',
      relationshipStatus: '',
    };
  }

  handleName1Change = (event) => {
    this.setState({ name1: event.target.value });
  };

  handleName2Change = (event) => {
    this.setState({ name2: event.target.value });
  };

  handleCalculateRelationship = () => {
    const { name1, name2 } = this.state;
    const name1Set = new Set(name1);
    const name2Set = new Set(name2);

    const remainingName1 = Array.from(name1).filter((char) => !name2Set.has(char)).join('');
    const remainingName2 = Array.from(name2).filter((char) => !name1Set.has(char)).join('');

    const score = (remainingName1.length + remainingName2.length) % 6;

    let status;
    switch (score) {
      case 1:
        status = 'Friends';
        break;
      case 2:
        status = 'Love';
        break;
      case 3:
        status = 'Affection';
        break;
      case 4:
        status = 'Marriage';
        break;
      case 5:
        status = 'Enemy';
        break;
      case 0:
        status = 'Siblings';
        break;
      default:
        status = '';
    }

    this.setState({ relationshipStatus: status });
  };

  handleClear = () => {
    this.setState({
      name1: '',
      name2: '',
      relationshipStatus: '',
    });
  };

  render() {
    const { name1, name2, relationshipStatus } = this.state;

    return (
      <div id="main">
        <h2>FLAMES Game</h2>

        <label htmlFor="name1">Enter First Name:</label>
        <input
          type="text"
          id="name1"
          value={name1}
          onChange={this.handleName1Change}
          data-testid="input1"
        />

        <label htmlFor="name2">Enter Second Name:</label>
        <input
          type="text"
          id="name2"
          value={name2}
          onChange={this.handleName2Change}
          data-testid="input2"
        />

        <button onClick={this.handleCalculateRelationship} data-testid="calculate_relationship">
          Calculate Relationship Future
        </button>

        <h3 data-testid="answer">{relationshipStatus}</h3>

        <button onClick={this.handleClear} data-testid="clear">
          Clear
        </button>
      </div>
    );
  }
}

export default App;
