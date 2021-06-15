import React from "react";
import "../Components.scss";

export default function Form() {
  return (
    <form className="form">
      <div className="form--ctn">
        <label className="form--ctn__label" for="name">
          Your Name
        </label>

        <input className="form--ctn__input" type="name" />
      </div>
      <div className="form--ctn">
        <label className="form--ctn__label" for="Email">
          Email
        </label>

        <input className="form--ctn__input" type="Email" />
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

        <textarea type="text" />
      </div>

      <input
        className="form--ctn__input form--ctn__btn"
        type="submit"
        value="SEND"
      />
    </form>
  );
}
