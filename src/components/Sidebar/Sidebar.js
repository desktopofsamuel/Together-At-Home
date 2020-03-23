// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuestionCircle, faRss, faPen } from '@fortawesome/pro-duotone-svg-icons';
import styles from './Sidebar.module.scss';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  return (
    <aside className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Link to="/"><h1 className={styles['sidebar__inner-title']}>Together At Home Club</h1></Link>
        <h2 className={styles['sidebar__inner-subtitle']}>Collection of free and discounted resources to keep you staying at home during COVID-19 outbreak.</h2>
      </div>
      <div className={styles['sidebar__footer']}>
        <div className={styles['sidebar__footer-follow']}>
          <a href="https://twitter.com/@tgtathomeclub" aria-label="Twitter"><div><FontAwesomeIcon icon={faTwitter}/></div><p>Twitter</p></a>
          <a href="https://tgtathome.club/rss.xml" aria-label="RSS"><div><FontAwesomeIcon icon={faRss}/></div><p>RSS</p></a>
        </div>
        <div className={styles['sidebar__footer-navigation']}>
        <a href="https://forms.gle/V1irZN92423dv83n7" target="_blank" ><div><FontAwesomeIcon icon={faQuestionCircle} /></div>Submit Your Resource</a>
        <Link to="/pages/about" target="_blank" ><div><FontAwesomeIcon icon={faPen} /></div>About</Link>
        </div>
        <div className={styles['sidebar__footer-credit']}>Created by <a href="https://twitter.com/@desktopofsamuel" target="_blank">@desktopofsamuel</a></div>
      </div>
    </aside>
  );
};

export default Sidebar;
