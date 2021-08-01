import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signupcustomer from './components/Signupcustomer';
import SignupRestaurant from './components/Signuprestaurant';
import LoginAdmin from './components/LoginAdmin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/home" component={Home} />
          <Route path="/signupcustomer" component={Signupcustomer} />
          <Route path="/signuprestaurant" component={SignupRestaurant} />
          <Route path="/loginadmin" component={LoginAdmin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
