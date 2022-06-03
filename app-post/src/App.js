import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


/**
 * React app with a JSON server
 * @module /App.js
 * 
 * @author Nike Spengler
 * @description A fullstack course with the frontend built in React
 * and a backend with JSON server
 * 
 * Read the "Readme"-file on gitHub to get started
 */


/**
 * This file collects all the diffrent paths for the website. 
 */
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
