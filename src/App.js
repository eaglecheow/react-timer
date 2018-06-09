import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import './vendor/fontawesome-free-5.0.13/fontawesome-free-5.0.13/web-fonts-with-css/css/fontawesome-all.css';
import 'flexboxgrid/dist/flexboxgrid.css';

import TimerApp from './components/TimerApp';

class App extends Component {
  render() {
    return (
      <div>
        <TimerApp />
      </div>
    );
  }

  
}
export default App;
