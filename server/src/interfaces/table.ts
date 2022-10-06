export type Filter = {
  filterField: string;
  condition: string;
  type: string;
  value: string;
};

export type Sort = {
  field: string;
  sort: 'ASC' | 'DESC';
};

export type QueryObject = {
  page: number;
  filter?: Filter;
  sort?: Sort;
};
