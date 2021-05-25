import React from "react";
import { Link } from "react-router-dom";
import "./Components.scss";

export default function Header() {
  return (
    <Link className="link" to="/">
      <header className="link--header">
        <h2 className="link--header__title">JAVIER LASSUS</h2>
      </header>
    </Link>
  );
}
