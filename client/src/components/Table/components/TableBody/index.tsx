import React, { FC, memo } from "react";

import { Column, Data } from "@interfaces";
import { Loader, TableRowItemContainer } from "@styles";
import { getRowsFromData } from "./helper";

import {
    TableRowText,
    TableRowContainer,
    TableBodyContainer,
    EmptyTableContainer,
} from "./TableBodyStyle";

interface TableBodyProps {
    data: Data | null;
    fields: Column[];
    isLoading: boolean;
}

export const TableBody: FC<TableBodyProps> = ({
    data,
    fields,
    isLoading,
}) => {
    if (isLoading || !data) {
        return (
            <EmptyTableContainer>
                <Loader />
            </EmptyTableContainer>
        );
    }

    const { data: items } = data;

    if (!items.length) {
        return <EmptyTableContainer>Ничего не найдено</EmptyTableContainer>;
    }

    const rows = getRowsFromData({ items, fields });

    return (
        <TableBodyContainer>
            {rows.map((row, index) => {
                return (
                    <TableRowContainer key={index}>
                        {row.map(({ fieldName, width, field }) => (
                            <TableRowItemContainer key={field} width={width}>
                                <TableRowText>
                                    {fieldName}
                                </TableRowText>
                            </TableRowItemContainer>
                        ))}
                    </TableRowContainer>
                )
            })}
        </TableBodyContainer>
    );
};
