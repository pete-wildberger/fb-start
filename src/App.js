import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    database.ref().on('value', snapshot => {
      this.setState({ data: snapshot.val() });
    });
  }
  handleChange(event) {
    const newData = event.target.value;
    this.setState({ newData });
  }
  handleSubmit(event) {
    event.preventDefault();
    const newData = database
      .ref()
      .child('AMAZINGDATA')
      .push(this.state.newData);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React and firebase</h1>
        </header>
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newData} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
