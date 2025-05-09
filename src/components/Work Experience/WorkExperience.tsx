import styles from "./workExperience.module.css";

type Experience = {
  position: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
  technologies?: string[];
};

type WorkExperienceProps = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <div id="experience" className={styles.experienceWrapper}>
      <div className={styles.workExperience}>
        <h2 className={styles.title}>Work Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.position}>{exp.position}</h3>
                  <span className={styles.duration}>{exp.duration}</span>
                </div>
                <h4 className={styles.company}>
                  {exp.company} | {exp.location}
                </h4>
                <ul className={styles.responsibilities}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
                {exp.technologies && (
                  <div className={styles.technologies}>
                    <span>Technologies: </span>
                    {exp.technologies.join(", ")}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
