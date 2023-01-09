import React, { useEffect, useState ,Component} from "react";
import Header from "./Components/Header";
import Generator from "./Components/Generator";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Namegenerator from "./Components/Namegenerator";
import { Results } from "./Components/Results";
import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";
import MainPage from "./Components/MainPage"
import InputPage from "./Components/InputPage"
import ResultsPage from "./Components/ResultsPage"

export default class App extends Component{
  constructor(props){
      super(props);
  }
  render(){
      return ( <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage/>}></Route>
          <Route path="/results" element={<ResultsPage/>} />
          <Route path="/input" element={<InputPage/>} />
        </Routes>
      </BrowserRouter>
      );
  }
}


