import React from 'react';
import './App.scss';

import { Items } from "./pages/Items";
import { Ghosts } from "./pages/Ghost";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contact";

import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Layout } from './layout/Layout';
import { useTracking } from './hooks/useTracking';
import { Challenges } from './pages/Challenge/Challenges';

export const App = () => {
  useTracking();
  return (
    <div className="App">
      <Layout>
        <Switch>
        <Route path="/contact">
            <Contacts />
          </Route>
          <Route path="/challenges">
            <Challenges />
          </Route>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/ghosts">
            <Ghosts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

const wrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default wrapper;
