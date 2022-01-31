import React, { ReactElement } from "react";
import { Children } from "./interface";

function Item({ children }: Children): ReactElement {
  return <li>{children}</li>;
}

export default React.memo(Item);
