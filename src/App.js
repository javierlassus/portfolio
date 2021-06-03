import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Icons from "./components/Icons";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Icons />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </Router>
  );
}
