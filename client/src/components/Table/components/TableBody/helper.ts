import { Column, Item, Row } from "@interfaces";

interface Params {
  items: Item[];
  fields: Column[];
}

export const getRowsFromData = ({
  items,
  fields,
}: Params) => {
  const rows: Row[][] = [];

  items.forEach((data) => {
    const row: Row[] = [];

    fields.forEach(({ field, type, width }) => {
      row.push({ fieldName: String(data[field as keyof Item]), type, width, field });
    });

    rows.push(row);
  });

  return rows;
};
