import { QueryObject } from "src/interfaces";

export const parseQueryParams = (query: any) => {
  const parsedQuery: QueryObject = {
    page: query.page || 1,
  };

  if (query.field) {
    parsedQuery.sort = {
      sort: query.sort || 'ASC',
      field: query.field,
    };
  }

  if (query.filterField) {
    parsedQuery.filter = {
      filterField: query.filterField,
      condition: query.condition,
      type: query.type,
      value: query.value,
    };
  }

  return parsedQuery;
};
