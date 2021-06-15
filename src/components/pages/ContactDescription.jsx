import React from "react";
import "../Components.scss";

export default function ContactDescription() {
  return (
    <div className="contactDesc">
      <h3 className="contactDesc--header">CONTACT ME</h3>
      <p className="contactDesc--message">
        Need someone to help you on a project or want to hire me full-time leave
        a message below or use my email address to get in contact
        <br />
        <span className="contactDesc--message__span">
          <a href="mailto:development@javierlassus.com">
            development@javierlassus.com
          </a>
        </span>
      </p>
    </div>
  );
}
