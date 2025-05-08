import styles from "./skill.module.css";

import reactLogo from "../../assets/react.svg";
import htmlLogo from "../../assets/html.svg";
import cssLogo from "../../assets/css.svg";
import jsLogo from "../../assets/js.svg";
import tsLogo from "../../assets/ts.svg";
import tailwindLogo from "../../assets/tailwind.svg";
import nodeLogo from "../../assets/node.svg";
import expressLogo from "../../assets/express.svg";
import mongoLogo from "../../assets/mongodb.svg";
import postgres from "../../assets/postgres.svg";
import githubLogo from "../../assets/github.svg";
import gitLogo from "../../assets/git.svg";

type Skill = {
  src: string;
  alt: string;
};

const skills: Skill[] = [
  { src: htmlLogo, alt: "HTML" },
  { src: cssLogo, alt: "CSS" },
  { src: jsLogo, alt: "JavaScript" },
  { src: tsLogo, alt: "TypeScript" },
  { src: reactLogo, alt: "React" },
  { src: tailwindLogo, alt: "tailwindcss" },
  { src: nodeLogo, alt: "nodeJS" },
  { src: expressLogo, alt: "express" },
  { src: mongoLogo, alt: "mongoDB" },
  { src: postgres, alt: "postgresql" },
  { src: githubLogo, alt: "github" },
  { src: gitLogo, alt: "git" },
  { src: reactLogo, alt: "React" },
];

function Skill() {
  return (
    <div id="skill" className={styles.skillsMainWrapper}>
      <div className={styles.skillsWrapper}>
        <h1>Tech Stack</h1>
        <div className={styles.skillContainer}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <img
                src={skill.src}
                alt={skill.alt}
                className={styles.skillImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
