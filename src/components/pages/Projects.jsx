import React from "react";
import { Link } from "react-router-dom";
import "../Components.scss";
import Fade from "react-reveal/Fade";

export default function Projects() {
  return (
    <section title="section" id="section" className="projects">
      <Fade bottom>
        <div className="projects--header">
          <h3 className="projects--header__text">Personal Projects</h3>
        </div>
      </Fade>
      <Link to="/neighborhood-crime-alert" className="link">
        <div className="projects--descr">
          <Fade bottom>
            <div className="projects--descr__text">
              <p>2021</p>
              <h3>Neighborhood Crime Alert</h3>
            </div>
          </Fade>
        </div>
      </Link>
    </section>
  );
}
