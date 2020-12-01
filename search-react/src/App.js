import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import { Home } from "./home/index";
import { Trending } from "./trending/index";
import "./App.css"

function App() {
  return (
    <div className="App">
          <div>
          <Router>
          <ul>
              <li className="links">
                  <Link to="/trending">
                  Trending
                  </Link>
                  <Link  to="/">
                  Home
                  </Link>
                
              </li>
          </ul>
          <Switch>
          <Route exact path="/trending" >
           <Trending/>
          </Route>
          <Route exact path="/">
           <Home/>
          </Route>
          </Switch>
          </Router>
      </div>

    </div>
  );
}

export default App;
