import React from 'react';
import './App.scss';

import { Ghost } from "./pages/Ghost";
import { Home } from "./pages/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Layout } from './layout/Layout';


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/ghost/:name">
              <Ghost />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
