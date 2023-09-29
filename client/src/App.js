//import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
//import Account from './components/Account';
import Inventory from './components/Inventory';
import Login from './components/Login';

//function App() {
  //return <h1>Project Client</h1>;

  function App() {

    // const[userList, setUserList] = useState([])

    // useEffect(() => {
    // fetch('http://localhost:5555/users')
    //      .then(r => r.json())
    //      .then(data => setUserList(data))
    //  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/inventory" component={Inventory} /> {/* Route to the Inventory component */}
          <Route path="/login" component={Login}/> {/* Route to the Login component */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;




