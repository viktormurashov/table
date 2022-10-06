import React, { FC, memo } from "react";

import { FieldType } from "@interfaces";
import { getOptionsByType } from "./helper";

interface SelectFiltrationConditionByFieldTypeProps {
  value: string;
  onChange: (newValue: string) => void;
  type?: FieldType;
}

export const SelectFiltrationConditionByFieldType: FC<SelectFiltrationConditionByFieldTypeProps> = memo(({
  value,
  onChange,
  type,
}) => {
  const options = getOptionsByType(type);

  const onChangeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      value={value}
      onChange={onChangeValue}
      disabled={!type}
    >
      <option value="" key="empty">Выберите поле</option>

      {options.map(({ value, text }) => (
        <option value={value} key={value}>{text}</option>
      ))}
    </select>
  );
}, (prev, next) => prev.type === next.type && prev.value === next.value);
