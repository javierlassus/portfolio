import React from "react";
import { Link } from "react-router-dom";

export default function Description() {
  return (
    <div className="description">
      <h3 className="description--name">Javier Lassus</h3>
      <h2 className="description--position">Full-Stack Developer</h2>
      <p className="description--text">
        For the past year, life has been a complete new journey for me. I just
        graduated from one the greatest Coding Bootcamps ever, which showed me
        my real passion and what is going to be the only type of work I will be
        doing until last days and I’m sure, I will be doing some insane work for
        the years to come.
      </p>
      <p className="description--actions">
        <a className="description--actions__view" href="#projects">
          View Projects
        </a>
        or
        <Link className="description--actions__link" to="/about">
          Read About Me
        </Link>
      </p>
      <Link>
        <button className="description--btn">Contact Me</button>
      </Link>
    </div>
  );
}
