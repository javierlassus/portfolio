import React from "react";
import "../Components.scss";

export default function Modal({ modal, setModal }) {
  //TO CLOSE MODAL BY THE X
  const handleClick = (e) => {
    if (modal !== e.target) {
      setModal(false);
    }
  };

  return <div>{modal ? <div className="modal"></div> : null}</div>;
}
