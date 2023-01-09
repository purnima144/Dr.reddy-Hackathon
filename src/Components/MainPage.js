import React from "react";
import  {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
  

export default class App extends Component{
  constructor(props){
      super(props);
  }
  render(){
      return ( <div>
         <Header/>
         <Footer/> 
         </div>
      );
  }
}


