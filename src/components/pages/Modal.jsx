import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import "../Components.scss";

export default function Modal({ modal }) {
  return (
    <>
      {modal ? (
        <nav className="modal">
          <p className="modal--menu">MENU</p>
          <Link className="link" activeClassName="active" to="/">
            <p className="modal--pages">PROJECTS</p>
          </Link>
          <Link className="link" activeClassName="active" to="/about">
            <p className="modal--pages">ABOUT ME</p>
          </Link>
          <Link className="link" activeClassName="active" to="/contact">
            <p className="modal--pages">CONTACT ME</p>
          </Link>
          <Link className="link" activeClassName="active" to="/resume">
            <p className="modal--pages">RESUME</p>
          </Link>
        </nav>
      ) : null}
    </>
  );
}
