import React from "react";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <div className="work">
      <hr className="work--hr"></hr>
      <div className="work--text">
        <p className="work--text__header">Need a new Team Member?</p>
        <Link className="link">
          <h3 className="work--text__action">Let's Work Together</h3>
        </Link>
      </div>
      <hr className="work--hr"></hr>
    </div>
  );
}
