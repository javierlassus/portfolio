import React from "react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">
            <div>
              <p>HOME</p>
            </div>
          </Link>
          <Link to="/projects">
            <div>
              <p>PROJECTS</p>
            </div>
          </Link>
          <Link to="/contact">
            <div>
              <p>CONTACT</p>
            </div>
          </Link>
          <Link to="/resume">
            <div>
              <p>RESUME</p>
            </div>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
