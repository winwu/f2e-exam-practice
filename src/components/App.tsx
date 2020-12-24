import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// pages
import Home from './pages/Home';
import Exam from './pages/Exam';
import Practice from './pages/Practice';

// components
import { chevronLeftWhite } from './Icons';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <header className="app-header py-3 sticky-top">
        <div className="container container-700">
          <div className="row flex-nowrap justify-content-between align-items-center">
              <div className="col-2">
                <Link to="/" style={{lineHeight: '16px', verticalAlign: 'top'}}>{chevronLeftWhite}</Link>
              </div>
              <div className="col-8 text-center">
                <div className="header-logo">⾦融市場常識與職業道德</div>
              </div>
              <div className="col-2 d-flex justify-content-end align-items-center">
                {/* <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a> */}
              </div>
          </div>
        </div>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/exam">
          <Exam />
        </Route>
        <Route path="/practice/:practiceType">
          <Practice />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
