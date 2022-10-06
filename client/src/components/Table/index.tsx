import React, { FC, useCallback, useState } from "react";

import { TableBody, TableFiltration, TableHeader, TablePagination } from "./components";

import { Column, Data, Filter, Sort } from "@interfaces";
import { useAsyncEffect } from "@hooks";
import { getItemsWithFilters } from "@services";
import { TableContainer, TableScrollContainer } from "./TableStyle";

type TableProps = {
  fields: Column[];
};

const callIfNotLoading = (isLoading: boolean, callback: () => void) => {
  isLoading
    ? alert('Подождите идёт загрузка')
    : callback();
};

export const Table: FC<TableProps> = ({
  fields,
}) => {
  const [data, setData] = useState<Data | null>(null);
  const [sort, setSort] = useState<Sort | null>(null);
  const [filter, setFilter] = useState<Filter | null>(null);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useAsyncEffect(async () => {
    setIsLoading(true);

    const result = await getItemsWithFilters({ page, sort, filter });

    if (!result) {
      setIsLoading(false);
      alert('Произошла ошибка');
      return;
    }

    setData(result);

    setIsLoading(false);
  }, [sort, page, filter]);

  const applyFilters = (newFilter: Filter) => {
    callIfNotLoading(isLoading, () => setFilter(newFilter));
  };

  const onSorting = (newSort: Sort) => {
    callIfNotLoading(isLoading, () => setSort(newSort));
  };

  const onPageChange = (newPage: number) => {
    callIfNotLoading(isLoading, () => setPage(newPage));
  };

  const resetFilters = () => {
    callIfNotLoading(isLoading, () => setFilter(null));
  };

  return (
    <TableContainer>
      <TableFiltration
        filter={filter}
        fields={fields}
        onResetFilters={resetFilters}
        onApplyFilters={applyFilters}
      />

      <TableScrollContainer>
        <TableHeader
          fields={fields}
          sort={sort}
          onSorting={onSorting}
        />

        <TableBody
          fields={fields}
          data={data}
          isLoading={isLoading}
        />

        <TablePagination
          metaData={data?.meta}
          onPageChange={onPageChange}
        />
      </TableScrollContainer>
    </TableContainer>
  );
};
