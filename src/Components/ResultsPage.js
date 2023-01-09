import React from "react";
import  {Component} from "react";
import Results from "./Results"


export default class App extends Component{
  constructor(props){
      super(props);
  }
  render(){
      return ( <div>
         <Results/>
         </div>
      );
  }
}