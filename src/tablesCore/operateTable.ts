import _cloneDeep from 'lodash/cloneDeep';

class TableOperations {
  table: ITable;

  constructor(table: ITable) {
    this.table = _cloneDeep(table);

    this.updateValue = this.updateValue.bind(this);
    this.serialize = this.serialize.bind(this);
    this.cellUpdate = this.cellUpdate.bind(this);
    this.updateCellSize = this.updateCellSize.bind(this);
  }

  updateValue(
    sheetIndex: number,
    cellLocation: string,
    newValue: string,
  ) {
    this.cellUpdate(sheetIndex, cellLocation, (cell) => ({
      ...cell,
      userInput: newValue,
      displayValue: newValue,
    }));
    return this;
  }

  updateCellSize(
    sheetIndex: number,
    cellLocation: string,
    sizes: {
      width?: number;
      height?: number;
    },
  ) {
    this.cellUpdate(sheetIndex, cellLocation, (cell) => ({
      ...cell,
      sizes,
    }));
    return this;
  }

  cellUpdate(
    sheetIndex: number,
    cellLocation: string,
    updateCallback: (cell: ICell) => ICell,
  ): void {
    const sheet = this.table.sheets[sheetIndex];
    sheet.cells[cellLocation] = updateCallback(
      sheet.cells[cellLocation],
    );
  }

  serialize(): ITable {
    return this.table;
  }
}

export const operateTable = (table: ITable): TableOperations => {
  return new TableOperations(table);
};
