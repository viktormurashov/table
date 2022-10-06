import { db } from "../db";

import { initDataSQL, initTableSQL } from "../constants";
import { QueryObject } from "../interfaces";
import { generateQuery, generateCountQuery } from "../utils";

export const getMultiply = async (params: QueryObject) => {
  const { page } = params;

  try {
    const query = generateQuery(params);
    const countQuery = generateCountQuery(params.filter);

    const res = await db.query(countQuery);
    const totalItems = Number(res.rows[0].count);

    const { rows } = await db.query(query, [page, 5]);

    const data = rows ?? [];

    const meta = { page: Number(page), totalItems, rowsPerPage: 5 };

    return {
      data,
      meta
    };
  } catch (error) {
    console.log(error);
    throw new Error('Error occured in getMultiply');
  }
};

export const initData = async () => {
  try {
    await db.query(initTableSQL);

    const { rowCount } = await db.query('SELECT * FROM test');

    if (rowCount) {
      return false;
    }

    await db.query(initDataSQL);

    return true;
  } catch (error) {
    console.log(error);
    throw new Error('Error occured in initData');
  }
};
