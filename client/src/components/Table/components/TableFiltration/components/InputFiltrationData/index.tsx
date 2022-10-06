import React, { memo, FC } from "react";

import { FieldType } from "@interfaces";

interface InputFiltrationDataProps {
  type?: FieldType;
  value: string;
  onChange: (newValue: string) => void;
}

export const InputFiltrationData: FC<InputFiltrationDataProps> = memo(({
  type,
  value,
  onChange,
}) => {
  const finalType = type === 'string' ? 'text' : type;

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type={finalType}
      disabled={!type}
      value={value}
      onChange={onChangeValue}
    />
  );
}, (prev, next) => prev.type === next.type && prev.value === next.value);
