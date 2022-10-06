import React, { FC } from "react";

import { Column, Sort } from "@interfaces";
import { TableHeaderSortButton, TableRowItemContainer } from "@styles";

interface TableHeader {
  fields: Column[];
  sort: Sort | null;
  onSorting: (sort: Sort) => void;
}

export const TableHeader: FC<TableHeader> = ({
  sort,
  fields,
  onSorting,
}) => {
  const onClickSorting = (field: string) => {
    if (field === sort?.field) {
      onSorting({ field, sort: sort.sort === 'ASC' ? 'DESC' : 'ASC' });
      return;
    }

    onSorting({ field, sort: 'DESC' });
  };

  return (
    <div style={{ display: 'flex' }}>
      {fields.map(({ fieldName, field, width, sortable }) => (
        <TableRowItemContainer key={field} width={width} sortable={sortable}>
          <div>
            {fieldName}
          </div>

          <TableHeaderSortButton
            sort={sort?.field === field ? sort?.sort : 'DESC'}
            onClick={() => onClickSorting(field)}
            isSelected={sort?.field === field}
          ></TableHeaderSortButton>
        </TableRowItemContainer>
      ))}
    </div>
  );
};
