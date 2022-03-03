import React from "react";

interface IArrowButtonProps {
  type: string;
  altText: string;
  src: string;
  onClick:() => void
}

function ArrowButton({
  type,
  altText,
  src,
  onClick
}: IArrowButtonProps): React.ReactElement {
  return (
    <button className={type} onClick={onClick}>
      <img src={src} alt={altText} />
    </button>
  );
}

export default ArrowButton;
