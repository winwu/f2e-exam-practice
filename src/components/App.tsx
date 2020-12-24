import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// pages
import Home from './pages/Home';
import Exam from './pages/Exam';
import Practice from './pages/Practice';

// components
import Header from './Header';
import ScrollToTop from './ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
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
