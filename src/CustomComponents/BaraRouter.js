import React from 'react';
import BaraHome from './Pages/BaraHome';
import BaraNews from './Pages/BaraNews';
import BaraSupport from './Pages/BaraSupport';
import BaraLogin from './Pages/BaraLogIn';
import BaraFooter from './BaraFooter';
import NavBar from './NavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function BaraRouter() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={BaraHome} />
          <Route exact path="/BaraHome" component={BaraHome} />
          <Route exact path="/BaraNews" component={BaraNews} />
          <Route exact path="/BaraSupport" component={BaraSupport} />
          <Route exact path="/BaraLogIn" component={BaraLogin} />
        </Switch>
      </Router>
      <BaraFooter>
      </BaraFooter>
    </div>
  );
}

export default BaraRouter;
