import React from "react";
import "./Components.scss";
import { animateScroll as scroll } from "react-scroll";
import In from "../assets/icons/linkedin.svg";
import Git from "../assets/icons/github.svg";
import Up from "../assets/icons/up-arrow.svg";

export default function Icons() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="social">
      <div className="social--scroll">
        <img
          onClick={scrollToTop}
          className="social--scroll__img"
          src={Up}
          alt="Scroll Up"
        />
      </div>
      <a href="https://www.linkedin.com/in/javierlassus/">
        <img className="social--img" src={In} alt="Linked In" />
      </a>
      <a href="https://github.com/javierlassus">
        <img className="social--img" src={Git} alt="GitHub" />
      </a>
    </div>
  );
}
