import { createReducer, createAction } from '@reduxjs/toolkit';
import { createTable, operateTable } from 'tablesCore';

export const actions = {
  changeCellValue: createAction<{
    cellLocation: string;
    userInput: string;
  }>('CHANGE_CELL_VALUE'),

  changeCellSize: createAction<{
    cellLocation: string;
    width: number;
    height: number;
  }>('CHANGE_CELL_SIZE'),

  changeCellType: createAction('CHANGE_CELL_TYPE'),
};

const initialState = {
  currentTable: createTable('Me'),
  currentSheetIndex: 0,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(actions.changeCellValue, (state, { payload }) => ({
    ...state,
    currentTable: operateTable(state.currentTable)
      .updateValue(
        state.currentSheetIndex,
        payload.cellLocation,
        payload.userInput,
      )
      .serialize(),
  }));
  builder.addCase(actions.changeCellSize, (state, { payload }) => ({
    ...state,
    currentTable: operateTable(state.currentTable)
      .updateCellSize(state.currentSheetIndex, payload.cellLocation, {
        height: payload.height,
        width: payload.width,
      })
      .serialize(),
  }));
});
