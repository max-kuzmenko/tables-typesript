import React from 'react';

import styles from './AppLayout.module.scss';

type TProps = {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  content: React.ReactNode;
};

const AppLayout = ({ header, content, sidebar }: TProps) => {
  return (
    <div className={styles.AppWrapper}>
      <div className={styles.Sidebar}>{sidebar}</div>
      <div className={styles.ContentArea}>
        <div className={styles.Header}>{header}</div>
        <div className={styles.Content}>{content}</div>
      </div>
    </div>
  );
};

export default AppLayout;
