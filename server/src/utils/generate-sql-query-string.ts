import { Filter, QueryObject } from "../interfaces";

const generateFilterQuery = (filter?: Filter) => {
  if (filter) {
    const { filterField, type, value, condition } = filter;
    if (type === 'string') {
      return `WHERE ${filterField} LIKE '%${value}%'`
    } else {
      return `WHERE ${filterField} ${condition} ${value}`;
    }
  }

  return '';
};

export const generateQuery = ({
  filter,
  sort,
}: QueryObject) => {
  const query = [
    'SELECT * FROM test',
  ];

  if (filter) {
    query.push(generateFilterQuery(filter));
  }

  if (sort) {
    query.push(`ORDER BY ${sort.field} ${sort.sort}`);
  }

  query.push('LIMIT $2 OFFSET (($1 - 1) * $2);');

  return query.join(' ');
};

export const generateCountQuery = (filter?: Filter) => {
  let filterQuery = '';

  if (filter) {
    filterQuery = generateFilterQuery(filter);
  }

  return `SELECT count(*) FROM test ${filterQuery}`;
};
