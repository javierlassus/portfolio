import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Squash as Hamburger } from "hamburger-react";
import "../Components.scss";

export default function Modal({ isOpen, setOpen, modal, setModal }) {
  return (
    <>
      {modal ? (
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
                  onToggle={() => setModal((prev) => !prev)}
                  toggled={isOpen}
                  toggle={setOpen}
                  size={25}
                  rounded
                  distance="sm"
                  hideOutline={false}
                  color="#fff"
                />
              </div>
            </nav>
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
            <a
              className="link"
              href="https://www.linkedin.com/in/javierlassus/"
            >
              <p className="modal--pages">LINKEDIN</p>
            </a>
            <a className="link" href="https://github.com/javierlassus">
              <p className="modal--pages">GITHUB</p>
            </a>
          </div>
        </Fade>
      ) : null}
    </>
  );
}
