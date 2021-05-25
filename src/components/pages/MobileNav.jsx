import React from "react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <nav className="nav">
      <Link className="nav--link" to="/">
        <div className="nav--link__cont">
          <p className="nav--link__cont__text">HOME</p>
        </div>
      </Link>
      <Link className="nav--link" to="/projects">
        <div className="nav--link__cont">
          <p className="nav--link__cont__text">PROJECTS</p>
        </div>
      </Link>
      <Link className="nav--link" to="/contact">
        <div className="nav--link__cont">
          <p className="nav--link__cont__text">CONTACT</p>
        </div>
      </Link>
      <Link className="nav--link" to="/resume">
        <div className="nav--link__cont">
          <p className="nav--link__cont__text">RESUME</p>
        </div>
      </Link>
    </nav>
  );
}
