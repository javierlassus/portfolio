import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Icons from "./components/Icons";
import Home from "./components/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

//PROJECTS
import ProjectOne from "./components/pages/ProjectOne";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Icons />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/neighboorhood-crime-alert" component={ProjectOne} />
      </Switch>
      <Footer />
    </Router>
  );
}
