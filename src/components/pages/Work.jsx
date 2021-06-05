import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/right-arrow.svg";

export default function Work() {
  return (
    <div className="work">
      <hr className="work--hr"></hr>
      <div className="work--text">
        <p className="work--text__header">Need a new Team Member?</p>
        <Link className="link">
          <div className="work--text__action">
            <h3>Let's Work Together</h3>
            <img src={Arrow} alt="Right Arrow" />
          </div>
        </Link>
      </div>
      <hr className="work--hr"></hr>
    </div>
  );
}
