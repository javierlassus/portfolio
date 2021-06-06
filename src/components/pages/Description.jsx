import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import Fade from "react-reveal/Fade";

export default function Description() {
  return (
    <div className="description">
      <Fade left>
        <h3 className="description--name">Javier Lassus</h3>
      </Fade>
      <Fade right>
        <h2 className="description--position">Full-Stack Developer</h2>
      </Fade>
      <Fade left>
        <p className="description--text">
          For the past year, life has been a complete new journey for me. I just
          graduated from one the greatest Coding Bootcamps ever, which showed me
          my real passion and what is going to be the only type of work I will
          be doing until last days and I’m sure, I will be doing some insane
          work for the years to come.
        </p>
      </Fade>
      <Fade right>
        <div className="description--actions">
          <Scroll
            to="section"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <p className="description--actions__view">View Projects</p>
          </Scroll>
          <p>or</p>
          <Link className="link" to="/about">
            <p className="description--actions__link" to="/about">
              Read About Me
            </p>
          </Link>
        </div>
        <Link to="/contact">
          <button className="description--btn">Contact Me</button>
        </Link>
      </Fade>
    </div>
  );
}
