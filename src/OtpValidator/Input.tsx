import React, { ChangeEvent, KeyboardEvent, ReactElement } from "react";

interface IInpurProps {
  type: "text" | "number";
  maxLength: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  onKeyUp: (event: KeyboardEvent<HTMLInputElement>) => void;
}

function Input({
  type,
  maxLength,
  onChange,
  name,
  value,
  onKeyUp,
}: IInpurProps): ReactElement {
  return (
    <input
      type={type}
      maxLength={maxLength}
      onChange={onChange}
      value={value}
      name={name}
      onKeyUp={onKeyUp}
    />
  );
}

export default Input;
