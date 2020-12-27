import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// pages
import Home from './Pages/Home';
import Exam from './Pages/Exam';
import Practice from './Pages/Practice';
import Review from './Pages/Review';

// components
import AppHeader from './AppHeader';
import ScrollToTop from './ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <AppHeader />
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
                <Route path="/review/:practiceType">
                    <Review />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
