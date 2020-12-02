import React from 'react';
import { AutoSizer, Grid } from 'react-virtualized';

import Scrollbars from 'components/Scrollbars';
import RemoveScroll from 'components/RemoveScroll';

import { getRems } from 'utils/css';
import { DEFAULT_CELL_WIDTH_REM } from 'constants/dafults';

import styles from './ColumnNames.module.scss';

type TProps = {
  scrollLeft: number;
  columnsCount: number;
};

const ColumnNames = ({ scrollLeft, columnsCount }: TProps) => {
  return (
    <RemoveScroll style={{ height: '100%' }}>
      <AutoSizer>
        {({ width, height }) => (
          <Scrollbars
            className={styles.NamesScroll}
            scrollLeft={scrollLeft}
            onScroll={(e) => e.preventDefault()}
            style={{ width, height }}
            renderThumbHorizontal={() => <span />}
            renderThumbVertical={() => <span />}
            renderTrackHorizontal={() => (
              <span style={{ pointerEvents: 'none' }} />
            )}
            renderTrackVertical={() => (
              <span style={{ pointerEvents: 'none' }} />
            )}
          >
            <Grid
              rowCount={1}
              rowHeight={height}
              columnWidth={getRems(DEFAULT_CELL_WIDTH_REM)}
              width={width}
              height={height}
              className={styles.List}
              scrollTop={0}
              scrollLeft={scrollLeft}
              columnCount={columnsCount}
              cellRenderer={({ key, columnIndex, style }) => {
                return (
                  <div
                    key={key}
                    className={styles.Name}
                    style={style}
                  >
                    {columnIndex + 1}
                  </div>
                );
              }}
            />
          </Scrollbars>
        )}
      </AutoSizer>
    </RemoveScroll>
  );
};

export default ColumnNames;
