import styles from '../styles/Copyright.module.scss';

type CopyrightProps = {
  display: 'desktop' | 'mobile' | 'all';
  holder: string;
};

export default function Copyright({display, holder}: CopyrightProps) {
  const currentYear = new Date().getFullYear();
  return (
    <div className={`${styles.copyright} ${styles[display]}`} >
      {`© ${currentYear} ${holder}`}
    </div>
  );
}
