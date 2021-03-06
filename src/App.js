import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/pages/ScrollTop";
import NavBar from "./components/NavBar";
import Modal from "./components/pages/Modal.jsx";
import Footer from "./components/Footer";
import Icons from "./components/Icons";
import Home from "./components/Home";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

//PROJECTS
import ProjectOne from "./components/pages/ProjectOne";

export default function App() {
  //STATE FOR HAMBURGER MANU
  const [isOpen, setOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <NavBar isOpen={isOpen} setOpen={setOpen} />
      <Modal isOpen={isOpen} setOpen={setOpen} />
      <Icons />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/neighborhood-crime-alert" component={ProjectOne} />
      </Switch>
      <Footer />
    </Router>
  );
}
