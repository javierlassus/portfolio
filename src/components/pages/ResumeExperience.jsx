import React from "react";
import "../Components.scss";
import Fade from "react-reveal/Fade";

export default function ResumeExperience() {
  return (
    <div className="experience">
      <Fade right>
        <h2 className="section">Experience</h2>
      </Fade>
      <Fade bottom>
        <div className="experience--ctn">
          <p className="experience--ctn__title">
            Insurance agent | US Health Advisors
          </p>
          <p className="experience--ctn__time"> MAR 2020 - 2020, MIAMI, FL</p>
          <ul className="experience--ctn__list">
            <li className="experience--ctn__list__item">
              Contacted potential clients to help them get a better health
              coverage, as well as helped them understand how to properly use
              their benefits.
            </li>
            <li className="experience--ctn__list__item">
              Demonstrated high quality of work, punctuality and
              responsibilities.
            </li>
          </ul>
        </div>
        <hr className="work--hr"></hr>{" "}
      </Fade>
      <Fade bottom>
        <div className="experience--ctn">
          <p className="experience--ctn__title">Technician | ITG</p>
          <p className="experience--ctn__time">AUG 2019 - 2020, MIAMI, FL</p>
          <ul className="experience--ctn__list">
            <li className="experience--ctn__list__item">
              Accountable for direct client support, with a track record of
              building sustainable relationships.
            </li>
            <li className="experience--ctn__list__item">
              Assisted customers by fixing faulty equipment.
            </li>
            <li className="experience--ctn__list__item">
              Successfully became one of the top 10 agents in the region,
              because of my work ethic and being able to work in half the time
              as the average tech.
            </li>
          </ul>
        </div>

        <hr className="work--hr"></hr>
      </Fade>
      <Fade bottom>
        <div className="experience--ctn">
          <p className="experience--ctn__title">
            Operations Manager | ModusLink
          </p>
          <p className="experience--ctn__time">FEB 2017 - 2019, MIAMI, FL</p>
          <ul className="experience--ctn__list">
            <li className="experience--ctn__list__item">
              Responsible for more than 30 employees.
            </li>
            <li className="experience--ctn__list__item">
              Successfully reduced company’s operational efficiency by 40% by
              implementing fresh ideas and new methods of work, saving the
              company more than $5,000 monthly in working expenses.
            </li>
          </ul>
        </div>
      </Fade>
    </div>
  );
}
