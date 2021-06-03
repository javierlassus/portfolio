import React from "react";
import "./Components.scss";
import In from "../assets/icons/linkedin.svg";
import Git from "../assets/icons/github.svg";

export default function Icons() {
  return (
    <div className="social">
      <a href="https://www.linkedin.com/in/javierlassus/">
        <img className="social--img" src={In} alt="Linked In" />
      </a>
      <a href="https://github.com/javierlassus">
        <img className="social--img" src={Git} alt="GitHub" />
      </a>
    </div>
  );
}
