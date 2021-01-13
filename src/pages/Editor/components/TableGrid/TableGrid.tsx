import React from 'react';

import { AutoSizer, Grid } from 'react-virtualized';

import Scrollbars from 'components/Scrollbars';

import { getRems } from 'utils/css';

import {
  DEFAULT_CELL_HEIGHT_REM,
  DEFAULT_CELL_WIDTH_REM,
} from 'constants/dafults';

import styles from './TableGrid.module.scss';

type TScroll = {
  scrollTop: number;
  scrollLeft: number;
};

type TProps = {
  columnsCount: number;
  rowsCount: number;
  scroll: TScroll;
  setScroll: (_: TScroll) => void;
};

const TableGrid = ({
  columnsCount,
  rowsCount,
  scroll,
  setScroll,
}: TProps) => {
  return (
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
            cellRenderer={({ key, rowIndex, columnIndex, style }) => {
              return (
                <div key={key} className={styles.Cell} style={style}>
                  {rowIndex}, {columnIndex}
                </div>
              );
            }}
          />
        </Scrollbars>
      )}
    </AutoSizer>
  );
};

export default TableGrid;
