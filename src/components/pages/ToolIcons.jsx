import React from "react";
import "../Components.scss";
import Bounce from "react-reveal/Bounce";

export default function ToolIcons() {
  return (
    <div className="tool">
      <Bounce left>
        <div className="tool--cont ">
          <div className="tool--cont__img one"></div>
        </div>
        <div className="tool--cont ">
          <div className="tool--cont__img two"></div>
        </div>
      </Bounce>
      <Bounce right>
        <div className="tool--cont ">
          <div className="tool--cont__img three"></div>
        </div>
        <div className="tool--cont">
          <div className="tool--cont__img four"></div>
        </div>
      </Bounce>
    </div>
  );
}
