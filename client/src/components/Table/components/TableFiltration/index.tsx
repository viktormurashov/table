import React, { FC, useState } from "react";

import { Column, Filter } from "@interfaces";

import {
  SelectFiltrationField,
  SelectFiltrationConditionByFieldType,
  InputFiltrationData,
} from "./components";
import { TableFiltrationContainer } from "./TableFiltrationStyle";

interface TableFiltrationProps {
  fields: Column[];
  filter: Filter | null;
  onResetFilters: () => void;
  onApplyFilters: (filter: Filter) => void;
}

export const TableFiltration: FC<TableFiltrationProps> = ({
  fields,
  filter,
  onResetFilters,
  onApplyFilters,
}) => {
  const [field, setField] = useState<null | Column>(null);
  const [condition, setCondition] = useState('');
  const [filtrationText, setFiltrationText] = useState('');

  const onChangeFiltrationField = (selectedField: string) => {
    const newSelectedField = fields.find(({ field }) => field === selectedField);
    setField(newSelectedField ?? null);
  };

  const onChangeCondition = (selectedCondition: string) => {
    setCondition(selectedCondition);
  };

  const onChangeFiltrationText = (filtrationText: string) => {
    setFiltrationText(filtrationText);
  };

  const onApply = () => {
    if (!field) {
      alert('Не выбранно поле');
      return;
    }

    onApplyFilters({ filterField: field.field, condition, value: filtrationText, type: field?.type });
  };

  const onReset = () => {
    setField(null);
    setCondition('');
    setFiltrationText('');

    onResetFilters();
  }

  const isApplyButtonAvailable = field && condition && filtrationText;

  return (
    <TableFiltrationContainer>
      <SelectFiltrationField
        fields={fields}
        value={field}
        onChange={onChangeFiltrationField}
      />

      <SelectFiltrationConditionByFieldType
        type={field?.type}
        value={condition}
        onChange={onChangeCondition}
      />

      <InputFiltrationData
        type={field?.type}
        value={filtrationText}
        onChange={onChangeFiltrationText}
      />

      <button onClick={onApply} disabled={!isApplyButtonAvailable}>
        Применить
      </button>

      {Boolean(filter) && (
        <button onClick={onReset}>
          X
        </button>
      )}
    </TableFiltrationContainer>
  );
};
