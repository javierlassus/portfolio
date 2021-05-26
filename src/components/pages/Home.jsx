import React from "react";
import "../Components.scss";
import ToolIcons from "./ToolIcons";

export default function Home() {
  return (
    <div>
      <div className="home">
        <p className="home--text">
          HI THERE, MY NAME IS <span>JAVIER LASSUS</span>. IM A WEB DEVELOPER
          EAGER TO LEARN AND BUILD NEW THINGS.
        </p>
        <p className="home--text">
          FOR THE PAST YEAR, LIFE HAS BEEN REALLY HARD FOR MANY PEOPLE, I LOST
          MY JOB AS A CABLE TECHNICIAN. AFTER ALMOST EIGHT MONTHS OF
          UNEMPLOYMENT AND NOT BEING ABLE TO FIND ANYTHING THAT WOULD GIVE ANY
          MEANING TO MY LIFE, I WAS RECOMMENDEN TO LOOK INTO WEB DEVELOPMENT AND
          THE REST IS HISTORY, AS I HAVE FALLEN IN LOVE WITH THIS NEW WORLD I
          JUST DISCOVER
        </p>
      </div>
      <ToolIcons />
    </div>
  );
}
