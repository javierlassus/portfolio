import React from "react";
import Download from "./Download";
import ResumeDescription from "./ResumeDescription";
import ResumeExperience from "./ResumeExperience";
import ResumeEducation from "./ResumeEducation";
import ResumeSkills from "./ResumeSkills";
import ResumeProjects from "./ResumeProjects";

export default function Resume() {
  return (
    <div>
      <Download />
      <ResumeDescription />
      <ResumeExperience />
      <ResumeEducation />
      <ResumeSkills />
      <ResumeProjects />
    </div>
  );
}
