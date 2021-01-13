import { v4 as uuid } from 'uuid';

import {
  DEFAULT_SHEET_NAME,
  DEFAULT_TABLE_NAME,
} from '../constants/dafults';

export const createSheet = (): ISheet => ({
  name: DEFAULT_SHEET_NAME,
  id: uuid(),
  createdAt: new Date().valueOf(),
  history: [],
  cells: {},
});

export const createTable = (author: string): ITable => ({
  author,
  name: DEFAULT_TABLE_NAME,
  id: uuid(),
  createdAt: new Date().valueOf(),
  sheets: [createSheet()],
});
