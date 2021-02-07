import React, { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './Home';
import About from './AB';
import GetInvolved from './GetInvolved';
import OurTeam from './OurTeam';
import Error from './Error';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../index.css';


const ReactRouterSetup = () => {
    return <Router>
        <Nav />
        <div className='page-wrapper'>
            <div className='content-wrapper'>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                        <About />
                        <GetInvolved />
                    </Route>
                    <Route exact path="/ourteam">
                        <OurTeam />
                    </Route>
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </div>

        
    </Router>;
}

export default ReactRouterSetup;
