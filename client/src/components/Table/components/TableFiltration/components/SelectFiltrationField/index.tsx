import React, { FC, memo } from "react";
import { Column } from "@interfaces";

interface SelectFiltrationFieldProps {
  value: Column | null;
  fields: Column[];
  onChange: (newValue: string) => void;
}

export const SelectFiltrationField: FC<SelectFiltrationFieldProps> = memo(({
  value,
  fields,
  onChange,
}) => {
  const onChangeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      value={value?.field || ''}
      onChange={onChangeValue}
    >
      <option value="" key="empty">Выберите поле</option>

      {fields.map(({ field, fieldName }) => (
        <option value={field} key={field}>{fieldName}</option>
      ))}
    </select>
  );
}, (prev, next) => prev.value === next.value);
