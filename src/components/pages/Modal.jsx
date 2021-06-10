import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Squash as Hamburger } from "hamburger-react";
import "../Components.scss";

export default function Modal({ isOpen, setOpen }) {
  return (
    <>
      {isOpen ? (
        <Fade top big opposite>
          <div className="modal">
            <nav className="nav">
              <div className="nav--header">
                <h1 className="nav--header__name">Javier Lassus</h1>
                <p className="nav--header__title">Full-Stack Dev</p>
              </div>
              <div className="nav--btn">
                <p className="nav--btn__menu">menu</p>
                <Hamburger
                  onToggle={() => setOpen((prev) => !prev)}
                  toggled={isOpen}
                  size={25}
                  rounded
                  distance="sm"
                  hideOutline={false}
                  color="#fff"
                />
              </div>
            </nav>
            <p className="modal--menu">MENU</p>
            <Link
              onClick={() => setOpen(false)}
              className="link"
              activeClassName="active"
              to="/"
            >
              <p className="modal--pages">PROJECTS</p>
            </Link>{" "}
            <Link
              onClick={() => setOpen(false)}
              className="link"
              activeClassName="active"
              to="/contact"
            >
              <p className="modal--pages">CONTACT ME</p>
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className="link"
              activeClassName="active"
              to="/about"
            >
              <p className="modal--pages">ABOUT ME</p>
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className="link"
              activeClassName="active"
              to="/resume"
            >
              <p className="modal--pages">RESUME</p>
            </Link>
            <a
              onClick={() => setOpen(false)}
              className="link"
              href="https://github.com/javierlassus"
            >
              <p className="modal--pages">GITHUB</p>
            </a>
            <a
              onClick={() => setOpen(false)}
              className="link"
              href="https://www.linkedin.com/in/javierlassus/"
            >
              <Fade top big cascade>
                <p className="modal--pages">LINKEDIN</p>
              </Fade>
            </a>
          </div>
        </Fade>
      ) : null}
    </>
  );
}
