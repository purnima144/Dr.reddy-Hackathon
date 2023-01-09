import React from "react";
import  {Component} from "react";
import Namegenerator from "./Namegenerator";



export default class App extends Component{
  constructor(props){
      super(props);
  }
  render(){
      return ( <div>
         <Namegenerator/>
         </div>
      );
  }
}