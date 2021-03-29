import React from 'react';
import BaraHome from './BaraHome';
import BaraContact from './BaraContact';
import BaraAbout from './BaraAbout';
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
