import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// pages
import Home from '../pages/Home';
import Practice from '../pages/Practice';

function App() {
  return (
    <div className="container container-700">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/practice">Practice</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/practice">
              <Practice />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
