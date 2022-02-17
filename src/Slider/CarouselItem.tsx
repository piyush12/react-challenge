import React, { FC, ReactChild, ReactElement } from "react";

const CarouselItem: FC<{
  children: ReactChild | ReactChild[];
}> = React.memo(({ children }) => {
  // console.log("first");
  return <>{children}</>;
});

export default CarouselItem;
