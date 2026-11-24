import { Fragment } from "react";

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Node.js", "Figma", "PostgreSQL", "Git", "UI/UX",
];

export default function Skills() {
  const row = [...skills, ...skills];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((skill, i) => (
          <Fragment key={i}>
            <span>{skill}</span>
            <i>✦</i>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
