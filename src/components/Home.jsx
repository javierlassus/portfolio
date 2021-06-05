import React from "react";
import "./Components.scss";
import Description from "./pages/Description";
import Image from "./pages/Image";

export default function Home() {
  return (
    <div className="home">
      <Image />
      <Description />
    </div>
  );
}
