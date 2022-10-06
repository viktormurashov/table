import { generateQuery } from "@utils";
import { Data, Filter, Sort } from "@interfaces";

type Params = {
  page: number;
  sort?: Sort | null;
  filter?: Filter | null;
};

export const getItemsWithFilters = async (
  params: Params,
): Promise<Data> => {
  try {
    const query = generateQuery(params);

    const res = await fetch(`http://localhost:8080/table?${query}`);
    const data = await res.json();

    if (!data) {
      throw new Error('Data is empty');
    }

    return data;
  } catch (error) {
    // TODO: add logger
    console.log(error);
  }

  return {
    data: [],
    meta: {
      page: 1,
      rowsPerPage: 0,
      totalItems: 0,
    },
  }
};
