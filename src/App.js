import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/Main.js';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div>
            <Main/>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
