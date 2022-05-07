import { MailIcon, MarkGithubIcon, LinkIcon, LocationIcon }  from '@primer/octicons-react';
import styles from '../styles/SideBar.module.scss';
import Copyright from './Copyright';
import type { UserInfo } from '../utils/types';

type SideBarProps = {
  data: UserInfo;
};

export default function SideBar({data}: SideBarProps) {
  const { picture, name, role, links } = data;

  const getIcon = (icon: string) => {
    if (icon === 'email') {
      return <MailIcon size={16}/>;
    } else if (icon === 'github') {
      return <MarkGithubIcon size={16}/>;
    } else if (icon === 'location') {
      return <LocationIcon size={16}/>;
    } else {
      return <LinkIcon size={16}/>;
    }
  }

  return (
    <div className={styles.container}>
      { picture && (
        <div className={styles.picture}>
          <img src={picture} alt="" />
        </div>
      )}
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.role}>{role}</div>
      <div className={styles.links}>
        { links.map((link) => (
          <div key={link.label} className={styles.linkItem}>
            { link.icon && getIcon(link.icon) }
            { link.url
              ? <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
              : <span>{link.label}</span>
            }
          </div>
        )) }
      </div>
      <Copyright display="desktop" holder={name}/>
    </div>
  );
}
