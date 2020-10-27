import React, { Component } from 'react';
import './App.scss';
import HeroIndex from '../pages/HeroIndex/HeroIndex';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <HeroIndex />
      </div>
    );
  }
}

export default App;
