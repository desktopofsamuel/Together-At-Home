// @flow strict
import React from 'react';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <aside className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <h1 className={styles['sidebar__inner-title']}>Together At Home</h1>
        <h2 className={styles['sidebar__inner-subtitle']}>Free resources offered around the world encourage you to stay at home.</h2>
      </div>
    </aside>
  );
};

export default Sidebar;
