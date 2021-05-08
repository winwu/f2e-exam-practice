import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";


// pages
import Home from './Pages/Home';
import Exam from './Pages/Exam';
import Practice from './Pages/Practice';
import Review from './Pages/Review';
import Bookmarks from './Pages/Bookmarks';

// components
import AppHeader from './AppHeader';
import ScrollToTop from './ScrollToTop';

function App() {
    return (
        <Router basename="/">
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
                <Route path="/bookmarks">
                    <Bookmarks />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
