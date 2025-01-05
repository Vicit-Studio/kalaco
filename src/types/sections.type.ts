export interface TypeSectionData<T = any> {
  client: Array<T | null>;
}

export interface TypeSectionDataQuery<T = any> {
  sData: T;
  sQuery: string;
  sVariables: T;
  tableData?: T;
}
