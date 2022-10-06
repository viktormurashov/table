import { Filter, Sort } from "@interfaces";

interface Params {
  page: number;
  sort?: Sort | null;
  filter?: Filter | null;
}

export const generateQuery = ({
  page = 1,
  sort,
  filter,
}: Params) => {
  const query: string[] = [];

  query.push(`page=${page}`);

  if (sort) {
    query.push(`sort=${sort.sort}&field=${sort.field}`);
  }

  if (filter) {
    query.push(Object.entries(filter).map(([key, value]) => `${key}=${value}`).join('&'));
  }

  return query.join('&');
};
