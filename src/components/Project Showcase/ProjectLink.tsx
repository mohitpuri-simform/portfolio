import styles from "./projectShowcase.module.css";
interface ProjectLinkProps {
  url: string;
  className: string;
  title: string;
}

function ProjectLink({ className, title, url }: ProjectLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.link} ${className}`}
    >
      {title}
    </a>
  );
}

export default ProjectLink;
