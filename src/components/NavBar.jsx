import React, { useState } from "react";
import "./Components.scss";
import { Squash as Hamburger } from "hamburger-react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav--header">
        <h1 className="nav--header__name">Javier Lassus</h1>
        <p className="nav--header--title">Full-Stack Dev</p>
      </div>
      <div className="nav--btn">
        <p className="nav--btn__menu">menu</p>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={25}
          rounded
          distance="sm"
          hideOutline={false}
        />
      </div>
    </nav>
  );
}
