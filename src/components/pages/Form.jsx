import React, { useEffect, useState } from "react";
import "../Components.scss";

export default function Form() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <form
      name="contact"
      method="POST"
      className="form"
      data-netlify="true"
      action="/contact/?success=true"
    >
      {success && <p style={{ color: "green" }}>Thanks for your message! </p>}
      <input type="hidden" name="form-name" value="contact" />
      <div className="form--ctn">
        <label className="form--ctn__label" for="name">
          Full Name
        </label>
        <input className="form--ctn__input" type="text" name="name" />
      </div>
      <div className="form--ctn">
        <label className="form--ctn__label" for="Email">
          Email
        </label>
        <input className="form--ctn__input" type="email" name="email" />
      </div>
      <div className="form--ctn">
        <label className="form--ctn__label" for="Subject">
          Subject
        </label>
        <input className="form--ctn__input" type="text" name="subject" />
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
      <button className="form--ctn__input form--ctn__btn" type="submit">
        SEND
      </button>
    </form>
  );
}
