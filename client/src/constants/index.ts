import { Column } from "../interfaces";

export const fields: Column[] = [
  {
    field: 'date',
    fieldName: 'Дата',
    type: 'date',
    width: 120,
    sortable: false,
  },
  {
    field: 'name',
    fieldName: 'Название',
    type: 'string',
    width: 160,
  },
  {
    field: 'amount',
    fieldName: 'Количество',
    type: 'number',
    width: 100,
  },
  {
    field: 'distance',
    fieldName: 'Расстояние',
    type: 'number',
    width: 100,
  },
];
