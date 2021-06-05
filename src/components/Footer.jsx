import React from "react";
import "./Components.scss";
import Fade from "react-reveal/Fade";
import Work from "./pages/Work";
import Information from "./pages/Information";

export default function Footer() {
  return (
    <div>
      <Fade left>
        <Work />
      </Fade>
      <Fade right>
        <Information />
      </Fade>
    </div>
  );
}
