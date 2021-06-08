import React from "react";
import "../Components.scss";

export default function Modal({ modal, setModal }) {
  //TO CLOSE MODAL BY THE X
  //   const handleClick = (e) => {
  //     if (modal !== e.target) {
  //       setModal(false);
  //     }
  //   };

  return (
    <>
      {modal ? (
        <div className="modal">
          <p>Hello</p>
        </div>
      ) : null}
    </>
  );
}
