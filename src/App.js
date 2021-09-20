/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Home from './components/home';

const App=()=> {
    
    return (
      <Router>
        <Switch>
        <Route exact path="/"  component={Home}/>
        
        </Switch>
      
    </Router>
    );
  
}

export default App;
