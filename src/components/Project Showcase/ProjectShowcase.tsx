import ProjectLink from "./ProjectLink";
import styles from "./projectShowcase.module.css";
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  codeUrl?: string;
}

export interface ProjectShowcaseProps {
  projects: Project[];
}
const ProjectShowcase = ({ projects }: ProjectShowcaseProps) => {
  return (
    <div id="projects" className={styles.projectWrapper}>
      <div className={styles.showcase}>
        <h1>Projects</h1>
        {projects.map((project) => (
          <div key={project.id} className={styles.project}>
            <div className={styles.content}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.techList}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.techItem}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.links}>
                {project.liveUrl && (
                  <ProjectLink
                    url={project.liveUrl}
                    className={styles.primaryLink}
                    title="Live Demo"
                  />
                )}
                {project.codeUrl && (
                  <ProjectLink
                    url={project.codeUrl}
                    className={styles.secondaryLink}
                    title="View Code"
                  />
                )}
              </div>
            </div>

            <div className={styles.imageContainer}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className={styles.image}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
