import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import Header from './components/Header';
import Home from './components/Home2';
import HeadPainRemoval from './components/PainRemoval/HeadAche/HeadPainRemoval';


import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/home"><Home/></Route>
          <Route path="/head-male"><HeadPainRemoval/></Route>
          <Route path="/head-female"><HeadPainRemoval/></Route>
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
