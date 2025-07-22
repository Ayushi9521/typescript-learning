import React from "react";
import type { TechStack } from "../types/TechStack";

type Props = {
  techStack: TechStack;
};

const Technology: React.FC<Props> = ({ techStack }) => {
  return (
    <>
      <h2>My Tech Stack</h2>
      <ul>
        {techStack.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
    </>
  );
};

export default Technology;
