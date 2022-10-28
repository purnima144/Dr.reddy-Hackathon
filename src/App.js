import React, {useState, useEffect} from 'react';
import Header from './Components/Header';
import Generator from './Components/Generator'
import Services from './Components/Services';
import Footer from './Components/Footer';
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import Namegenerator from './Components/Namegenerator';
import ListPage from './Components/ListPage'
import { getPosts } from './Components/axios'


function App() {

  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      setSearchResults(json)
    })
  }, [])


  return (
    <div className="App">
      <Namegenerator posts={posts} setSearchResults={setSearchResults}/>
       <ListPage searchResults={searchResults} />
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
