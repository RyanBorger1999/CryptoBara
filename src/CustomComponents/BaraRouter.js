import React from 'react';
import BaraHome from './Pages/BaraHome';
import BaraContact from './Pages/BaraContact';
import BaraAbout from './Pages/BaraAbout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function BaraRouter() {
  return (
    <Router>
      <div className="BaraRouter">
        <Switch>
          <Route path="/BaraHome">
            <BaraHome />
          </Route>
          <Route path="/BaraAbout">
            <BaraAbout />
          </Route>
          <Route path="/BaraContact">
            <BaraContact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default BaraRouter;
