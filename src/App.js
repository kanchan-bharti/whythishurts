import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import Main from './components/Main.js';

function App() {
  return (
    <div className="App">
        <HashRouter>
          <div>
            <Main/>
          </div>
        </HashRouter>
    </div>
  );
}

export default App;
