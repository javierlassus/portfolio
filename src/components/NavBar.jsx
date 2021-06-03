import React, { useState } from "react";
import "./Components.scss";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="nav">
      <div className="nav--header">
        <h1 className="nav--header__name">Javier Lassus</h1>
        <p className="nav--header--title">Full-Stack Dev</p>
      </div>
      <div className="nav--btn">
        <p className="nav--btn__menu">menu</p>
        <button className={open ? "nav-open" : null}>
          <span className="nav--btn__ctn__hamburger"></span>
        </button>
      </div>
    </div>
  );
}
