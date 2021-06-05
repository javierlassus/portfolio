import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Components.scss";
import { Squash as Hamburger } from "hamburger-react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="nav">
      <Link className="link" to="/">
        <div className="nav--header">
          <h1 className="nav--header__name">Javier Lassus</h1>
          <p className="nav--header__title">Full-Stack Dev</p>
        </div>
      </Link>
      <div className="nav--btn">
        <p className="nav--btn__menu">menu</p>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={25}
          rounded
          distance="sm"
          hideOutline={false}
          color="#2f4858"
        />
      </div>
    </nav>
  );
}
