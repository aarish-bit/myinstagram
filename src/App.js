import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from './common-components/Toolbar/Toolbar';
import Routes from './Routes/Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Toolbar />
        <hr />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
