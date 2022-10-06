import { Column, FieldType, Item, Row } from "@interfaces";

interface Params {
  items: Item[];
  fields: Column[];
}

const getTextByType = (text: string | number, type: FieldType) => {
  if (!text) {
    return '';
  }

  if (type === 'date') {
    return new Date(Number(text)).toLocaleDateString();
  }

  return String(text);
}

export const getRowsFromData = ({
  items,
  fields,
}: Params) => {
  const rows: Row[][] = [];

  items.forEach((data) => {
    const row: Row[] = [];

    fields.forEach(({ field, type, width }) => {
      const text = getTextByType(data[field as keyof Item], type);
      row.push({ fieldName: text, type, width, field });
    });

    rows.push(row);
  });

  return rows;
};
