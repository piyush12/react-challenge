import React, { ReactElement } from "react";
import { ButtonProps } from "./interface";

function Button({
  value,
  className,
  onClick,
  children,
  type = "button",
}: ButtonProps): ReactElement {
  return (
    <button className={className} onClick={onClick} type={type}>
      {value || children}
    </button>
  );
}

export default Button;
