import React from "react";
import "../Components.scss";
import Name from "../../assets/icons/name.svg";
import Email from "../../assets/icons/email.svg";
import Message from "../../assets/icons/comment.svg";

export default function Form() {
  return (
    <form className="form">
      <div className="form--ctn">
        <label className="form--ctn__label" for="name">
          Your Name
        </label>
        <div className="form--ctn__ii">
          <img className="form--ctn__ii__img" src={Name} alt="Name" />
          <input
            className="form--ctn__ii__input"
            type="name"
            placeholder="Full Name..."
          />
        </div>
      </div>
      <div className="form--ctn">
        <label className="form--ctn__label" for="Email">
          Email
        </label>
        <div className="form--ctn__ii">
          <img className="form--ctn__ii__img" src={Email} alt="Email" />
          <input
            className="form--ctn__ii__input"
            type="Email"
            placeholder="Email..."
          />
        </div>
      </div>
      <select>
        <option>What are you interested in?</option>
        <option>Want to hire you full-time</option>
        <option>Need help on a project</option>
        <option>Leave a feedBack </option>
        <option>Question </option>
      </select>
      <div className="form--ctn">
        <label className="form--ctn__label" for="Message">
          Message
        </label>
        <div className="form--ctn__ii">
          <img className="form--ctn__ii__img" src={Message} alt="Message" />
          <textarea type="text" placeholder="Message..." />
        </div>
      </div>
      <input className="form--ctn__ii__input" type="submit" value="SEND" />
    </form>
  );
}
