import React from "react";
import "./Components.scss";
import Image from "./pages/Image";
import Description from "./pages/Description";
import Projects from "./pages/Projects";

export default function Home() {
  return (
    <div className="home">
      <Image />
      <Description />
      <Projects />
    </div>
  );
}
