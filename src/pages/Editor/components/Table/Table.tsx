import React, { useState } from 'react';

import Icon from 'components/Icon';

import RowNames from '../RowNames';
import ColumnNames from '../ColumnNames';
import TableGrid from '../TableGrid';

import styles from './Table.module.scss';

type TProps = {
  columnsCount: number;
  rowsCount: number;
};

const Table = ({ columnsCount, rowsCount }: TProps) => {
  const [scroll, setScroll] = useState({
    scrollTop: 0,
    scrollLeft: 0,
  });

  return (
    <div className={styles.TableLayout}>
      <div className={styles.TopNavigation}>
        <div className={styles.NavIconContainer}>
          <div className={styles.WidthOffset}>{rowsCount}</div>
          <Icon className={styles.Icon} type="compass" />
        </div>
        <div className={styles.PaddingBlock} />
        <div className={styles.ColumnNamesContainer}>
          <ColumnNames
            scrollLeft={scroll.scrollLeft}
            columnsCount={columnsCount}
          />
        </div>
      </div>

      <div className={styles.BottomTable}>
        <div className={styles.SideNavigation}>
          <div className={styles.WidthOffset}>{rowsCount}</div>
          <RowNames
            scrollTop={scroll.scrollTop}
            rowsCount={rowsCount}
          />
        </div>
        <div className={styles.PaddingBlock} />
        <div className={styles.TableGridContainer}>
          <TableGrid
            columnsCount={columnsCount}
            rowsCount={rowsCount}
            scroll={scroll}
            setScroll={setScroll}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
