export type FieldType = 'date' | 'number' | 'string';

export type Row = {
    fieldName: string;
    width: number;
    type: FieldType;
    field: string;
};

export type Column = Row & {
    sortable?: boolean;
};

export type Item = {
    date: number;
    name: string,
    amount: number,
    distance: number,
};

export type MetaData = {
    page: number;
    totalItems: number;
    rowsPerPage: number;
};

export type Data = {
    data: Item[];
    meta: MetaData;
};

export type Filter = {
    filterField: string;
    condition: string;
    type: string;
    value: string;
};

export type Sort = {
    field: string;
    sort: 'ASC' | 'DESC';
};
