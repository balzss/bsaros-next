import styles from '../styles/ProjectCard.module.scss';
import type { Project } from '../utils/types';

type ProjectCardProps = {
  data: Project;
};

export default function ProjectCard({ data }: ProjectCardProps) {
  const { title, url, description, links } = data;
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        {url ? (
            <a href={url} className={styles.name} target="_blank" rel="noopener noreferrer">{title}</a>
          ) : (
            <h3 className={styles.name}>{title}</h3>
        )}
        <div className={styles.description}>{description}</div>
        {links && links.length > 0 && (
          <div className={styles.links}>
            { links.map((link, index) => (
              <>
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                {index < links.length - 1 && (' ⸱ ')}
              </>
            )) }
          </div>
        )}
      </div>
    </div>
  );
}
