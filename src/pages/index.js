import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import GetInvolved from "./GetInvolved";
import OurTeam from "./OurTeam";
import Projects from "./Projects";
import Error from "./Error";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../index.css";
import "./pages.css";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Nav />
      <div className="page-wrapper">
        <div className="content-wrapper">
          <Switch>
            <Route exact path="/">
              <Home />
              <About />
              <GetInvolved />
            </Route>
            <Route exact path="/ourteam">
              <OurTeam />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default ReactRouterSetup;
