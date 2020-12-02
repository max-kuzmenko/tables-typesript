import React, { useState } from 'react';
import { Grid, AutoSizer } from 'react-virtualized';

import Scrollbars from 'components/Scrollbars';
import Icon from 'components/Icon';
import { getRems } from 'utils/css';

import RowNames from '../RowNames';
import ColumnNames from '../ColumnNames';

import {
  DEFAULT_CELL_HEIGHT_REM,
  DEFAULT_CELL_WIDTH_REM,
} from 'constants/dafults';

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
      <div className={styles.RowNames}>
        <div className={styles.HeightOffset}>
          A
          <div className={styles.NavIcon}>
            <Icon type="compass" />
          </div>
        </div>
        <div style={{ height: '100%' }}>
          <RowNames
            scrollTop={scroll.scrollTop}
            rowsCount={rowsCount}
          />
        </div>
        <div className={styles.WidthOffset}>{rowsCount}</div>
      </div>
      <div className={styles.TableSide}>
        <div className={styles.ColumnNames}>
          <ColumnNames
            scrollLeft={scroll.scrollLeft}
            columnsCount={columnsCount}
          />
          <div className={styles.HeightOffset}>A</div>
        </div>
        <div className={styles.TableWrapper}>
          <AutoSizer>
            {({ width, height }) => (
              <Scrollbars
                className={styles.ScrollArea}
                scrollTop={scroll.scrollTop}
                scrollLeft={scroll.scrollLeft}
                style={{ width, height }}
                onScroll={(e) => {
                  setScroll({
                    scrollLeft: e.currentTarget.scrollLeft,
                    scrollTop: e.currentTarget.scrollTop,
                  });
                }}
              >
                <Grid
                  className={styles.Grid}
                  overscanColumnCount={5}
                  overscanRowCount={10}
                  rowCount={rowsCount}
                  columnCount={columnsCount}
                  rowHeight={getRems(DEFAULT_CELL_HEIGHT_REM)}
                  columnWidth={getRems(DEFAULT_CELL_WIDTH_REM)}
                  width={width}
                  height={height}
                  scrollTop={scroll.scrollTop}
                  scrollLeft={scroll.scrollLeft}
                  cellRenderer={({
                    key,
                    rowIndex,
                    columnIndex,
                    style,
                  }) => {
                    return (
                      <div
                        key={key}
                        className={styles.Cell}
                        style={style}
                      >
                        {rowIndex}, {columnIndex}
                      </div>
                    );
                  }}
                />
              </Scrollbars>
            )}
          </AutoSizer>
        </div>
      </div>
    </div>
  );
};

export default Table;
