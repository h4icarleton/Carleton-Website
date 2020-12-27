import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import GetInvolved from './GetInvolved';
import OurTeam from './OurTeam';
import Error from './Error';
import Nav from '../components/TempNav';

const ReactRouterSetup = () => {
    return <Router>
        <Nav />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/getinvolved">
                <GetInvolved />
            </Route>
            <Route exact path="/ourteam">
                <OurTeam />
            </Route>
            <Route path="*">
                <Error />
            </Route>
        </Switch>
    </Router>;
}

export default ReactRouterSetup;
