import React from 'react';
import './App.css';

import { Ghost } from "./pages/Ghost";
import { Home } from "./pages/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/ghost/:name">
              <Ghost />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
