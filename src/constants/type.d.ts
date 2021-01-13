interface ITable {
  id: string;
  name: string;
  author: string;
  createdAt: number;
  sheets: ISheet[];
}

interface ISheet {
  id: string;
  name: string;
  createdAt: number;
  history: IEditEvent[];
  cells: { [key: string]: ICell };
}

interface ICell {
  id: string;
  userInput: string;
  inferredType: string;
  displayValue: string;
  mergeParent?: string;
  mergeChildren?: string[];
  type?: string;
  sizes?: { width?: number; height?: number };
}

interface IEditEvent {
  type: string;
  createdAt: number;
  author: string;
}

type ArgTypes<T> = T extends (...a: infer A) => any ? A : [];
