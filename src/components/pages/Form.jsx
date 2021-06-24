import React from "react";
import "../Components.scss";

export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      name="contact"
      method="POST"
      className="form"
      data-netlify="true"
    >
      <div className="form--ctn">
        <label className="form--ctn__label" for="name">
          Full Name
        </label>
        <input className="form--ctn__input" type="text" name="Full Name" />
      </div>
      <div className="form--ctn">
        <label className="form--ctn__label" for="Email">
          Email
        </label>
        <input className="form--ctn__input" type="Email" name="Email" />
      </div>
      <div className="form--ctn">
        <label className="form--ctn__label" for="Subject">
          Subject
        </label>
        <input className="form--ctn__input" type="text" name="Subject" />
      </div>
      <div className="form--ctn textarea">
        <label className="form--ctn__label" for="Message">
          Message
        </label>
        <textarea
          className="form--ctn__textarea"
          rows="5"
          cols="50"
          type="text"
          name="message"
        />
      </div>
      <input
        className="form--ctn__input form--ctn__btn"
        type="submit"
        value="SEND"
      />
    </form>
  );
}
