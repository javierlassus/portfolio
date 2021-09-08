import React from "react";
import "../Components.scss";
import Fade from "react-reveal/Fade";

export default function ResumeDescription() {
  return (
    <Fade left>
      <div className="resumeDesc">
        <h2 className="section">About me</h2>
        <p className="resumeDesc--text">
          Being able to become a software engineer has been one of the greatest
          accomplishment in my entire life. I was born in Cuba, emigrated to the
          United States in 2012, since then my life has taken a 360-degree turn
          as I’ve been given the opportunity to choose who I want to be and
          become. I am also greatly motivated by my baby, who has become my
          world and motivation, and who inspires me to work to excel in a career
          in software engineering. I’ve always recognized myself as a builder
          who can think outside the box and can implement realistic ideas into
          the real world. As a result of this I’ve fallen in love with this
          career. Choosing this new path showed me how much I love building
          stuff and how passionate about it I’ve become
        </p>
      </div>
    </Fade>
  );
}
