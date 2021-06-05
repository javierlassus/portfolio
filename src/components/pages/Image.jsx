import React from "react";
import "../Components.scss";
import Fade from "react-reveal/Fade";

export default function Image() {
  return (
    <Fade left>
      <div className="image"></div>
    </Fade>
  );
}
