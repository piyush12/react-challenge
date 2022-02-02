import React, { ReactChild, ReactElement } from "react";

function InputView({
  label,
  className = "",
  field,
  text,
  labelId,
}: {
  label?: string;
  className?: string;
  children?: ReactChild | ReactChild[];
  field?: ReactChild | ReactChild[];
  text?: string;
  labelId?: string;
}): ReactElement {
  return (
    <div className={className}>
      {field && field}
      {text && <div className='label'>{text}</div>}
      {label && <label htmlFor={labelId}>{label}</label>}
    </div>
  );
}

export default InputView;
