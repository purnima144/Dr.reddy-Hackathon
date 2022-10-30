import React, {useState, useEffect} from 'react';
import Header from './Components/Header';
import Generator from './Components/Generator'
import Services from './Components/Services';
import Footer from './Components/Footer';
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import Namegenerator from './Components/Namegenerator';
import { Results } from './Components/Results';




function App() {

  return (
    <div className="App">
    <Namegenerator/>
    <Results/>
    
      {/* <Test/> */}
      {/*<Header/>
      <Generator/>
      <Services/>
      <Footer/>

        This is the alias of BrowserRouter i.e. Router 
       <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component
          <Route exact path="/" component={Login} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component
          <Route path="/about" component={Register} />
          <Redirect to="/" />
        </Switch>
      </Router>*/}
      
    </div>
  );
}

export default App;
