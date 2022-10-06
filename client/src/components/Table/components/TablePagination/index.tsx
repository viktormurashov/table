import React, { FC } from "react";

import { MetaData } from "@interfaces";
import {
  PaginationButton,
  PaginationTextContainer,
  TablePaginationContainer,
  PaginationButtonsContainer,
} from "./TablePaginationStyle";

interface TablePaginationProps {
  metaData?: MetaData;
  onPageChange: (newPage: number) => void;
}

export const TablePagination: FC<TablePaginationProps> = ({
  metaData,
  onPageChange,
}) => {
  if (!metaData) {
    return <></>;
  }

  const { page, totalItems, rowsPerPage } = metaData;

  if (!totalItems) {
    return <></>;
  }

  const itemsOnPage = page * rowsPerPage;
  const itemsRangeOnCurrentPage = (page - 1) * rowsPerPage + 1;
  const maxItems = totalItems < itemsOnPage ? totalItems : itemsOnPage;

  const text = `${itemsRangeOnCurrentPage} - ${maxItems} из ${totalItems}`;

  const onSelectNewPage = (newPage: number) => {
    onPageChange(newPage);
  };

  return (
    <TablePaginationContainer>
      <PaginationTextContainer>
        {text}
      </PaginationTextContainer>

      <PaginationButtonsContainer>
        <PaginationButton
          disabled={page === 1}
          onClick={() => onSelectNewPage(page - 1)}
        >
          {'<'}
        </PaginationButton>

        <PaginationButton
          disabled={maxItems === totalItems}
          onClick={() => onSelectNewPage(page + 1)}
        >
          {'>'}
        </PaginationButton>
      </PaginationButtonsContainer>
    </TablePaginationContainer>
  );
};
