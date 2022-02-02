import React, { ChangeEvent, ReactElement } from "react";

function Input({
  value = "",
  type = "text",
  name,
  id,
  checked = false,
  onChange,
  ...rest
}: {
  value: string | number;
  type?: string;
  name: string;
  id?: string;
  checked?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}): ReactElement {
  return (
    <input
      type={type}
      value={value}
      name={name}
      id={id || name}
      onChange={onChange}
      checked={checked}
      {...rest}
    />
  );
}

export default Input;
