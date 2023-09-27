import React, { useEffect, useState } from "react";
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Account from './components/Account';
import Inventory from './components/Inventory';
import Login from './components/Login';

//function App() {
  //return <h1>Project Client</h1>;

  function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar /> {/* Include the NavBar component */}
        <Switch>
          {/* Define your routes */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;




