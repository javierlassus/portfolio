import React, { useState, useEffect } from "react";
import "./Components.scss";
import { animateScroll as scroll } from "react-scroll";
import In from "../assets/icons/linkedin.svg";
import Git from "../assets/icons/github.svg";
import Up from "../assets/icons/up-arrow.svg";

export default function Icons() {
  //TO TARGET THE SCROLL AND ACTIVATE THE BUTTON TO SCROLL UP
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  //TO SCROLL UP ON CLICK
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="social">
      {visible && (
        <div className="social--scroll">
          <img
            onClick={scrollToTop}
            className="social--scroll__img"
            src={Up}
            alt="Scroll Up"
          />
        </div>
      )}

      <a href="https://www.linkedin.com/in/javierlassus/">
        <img className="social--img" src={In} alt="Linked In" />
      </a>
      <a href="https://github.com/javierlassus">
        <img className="social--img" src={Git} alt="GitHub" />
      </a>
    </div>
  );
}
