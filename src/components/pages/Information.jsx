import React from "react";

export default function Information() {
  return (
    <div className="information">
      <div className="information--ctn">
        <h3 className="information--ctn__header">Contact Information</h3>
        <p className="information--ctn__details">
          E:
          <span>
            <a href="mailto:development@javierlassus.com">
              development@javierlassus.com
            </a>
          </span>
        </p>
        <p className="information--ctn__details">
          P:<span>786-678-5476</span>
        </p>
      </div>
      <div className="information--follow">
        <p className="information--follow__header">Follow me on</p>
        <p>
          <a className="link" href="https://www.linkedin.com/in/javierlassus/">
            LinkedIn
          </a>
          <span>|</span>
          <a className="link" href="https://github.com/javierlassus">
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
