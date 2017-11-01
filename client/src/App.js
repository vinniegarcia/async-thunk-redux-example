import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import SmartList from './SmartList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <SmartList />
        </div>
      </Provider>
    );
  }
}

export default App;
