import Head from 'next/head';
import {
  SideBar,
  ProjectCard,
  Copyright,
} from '../components';
import { projects, userInfo } from '../data';
import styles from '../styles/Home.module.scss';
import type { Project, UserInfo } from '../utils/types';

type HomeProps = {
  projects: Project[];
  userInfo: UserInfo;
};

export default function Home({ projects, userInfo }: HomeProps) {
  return (
    <>
      <Head>
        <title>{userInfo.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div className={styles.container}>
        <SideBar data={userInfo}/>
        <div className={styles.content}>
          <h3 className={styles.sectionTitle}>Projects</h3>
          <div className={styles.grid}>
            { projects.map((projectInfo) => (
              <ProjectCard data={projectInfo} key={projectInfo.title}/>
            ))}
          </div>
          <Copyright display="mobile" holder={userInfo.name}/>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects,
      userInfo,
    },
  };
}
