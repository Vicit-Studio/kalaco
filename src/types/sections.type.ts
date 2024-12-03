import { PageQuery, PageConnectionQuery } from "../../tina/__generated__/types";

export interface TypeSectionData<T = any> {
  client: Array<T | null>;
}

export interface TypeSectionDataQuery<T = any> {
  sData: PageQuery | PageConnectionQuery;
  sQuery: string;
  sVariables: T;
}
