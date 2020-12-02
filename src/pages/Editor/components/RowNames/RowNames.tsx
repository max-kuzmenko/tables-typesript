import React from 'react';
import { AutoSizer, List } from 'react-virtualized';

import Scrollbars from 'components/Scrollbars';
import RemoveScroll from 'components/RemoveScroll';

import { getRems } from 'utils/css';
import { DEFAULT_CELL_HEIGHT_REM } from 'constants/dafults';

import styles from './RowNames.module.scss';

type TProps = {
  scrollTop: number;
  rowsCount: number;
};

const RowNames = ({ scrollTop, rowsCount }: TProps) => {
  return (
    <RemoveScroll style={{ height: '100%' }}>
      <AutoSizer>
        {({ height, width }) => (
          <Scrollbars
            className={styles.NamesScroll}
            scrollTop={scrollTop}
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
            <List
              width={width}
              height={height}
              className={styles.List}
              rowCount={rowsCount}
              rowHeight={getRems(DEFAULT_CELL_HEIGHT_REM)}
              scrollTop={scrollTop}
              rowRenderer={({ key, index, style }) => (
                <div key={key} className={styles.Name} style={style}>
                  {index + 1}
                </div>
              )}
            />
          </Scrollbars>
        )}
      </AutoSizer>
    </RemoveScroll>
  );
};

export default RowNames;
