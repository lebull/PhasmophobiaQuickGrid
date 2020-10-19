import React from 'react';
import './App.scss';

import { Items } from "./pages/Items";
import { Ghost } from "./pages/Ghost";
import { Home } from "./pages/Home";

import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Layout } from './layout/Layout';
import { useTracking } from './hooks/useTracking';


export const App = () => {
  useTracking();
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/ghost/:name">
            <Ghost />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
