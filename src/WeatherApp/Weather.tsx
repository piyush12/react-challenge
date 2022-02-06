import React from "react";
import PartlyCloudy from "./PartlyCloudy";
import RainySymbol from "./RainySymbol";
import SnowySymbol from "./SnowySymbol";
import StormySymbol from "./StormySymbol";
import SunnySymbol from "./SunnySymbol";

function Weather({ status }: { status: string }): React.ReactElement {
  const statusIcon = () => {
    if (status === "sunny") return <SunnySymbol />;
    if (status === "partly-cloudy") return <PartlyCloudy />;
    if (status === "rainy") return <RainySymbol />;
    if (status === "stormy") return <StormySymbol />;
    if (status === "snowy") return <SnowySymbol />;
  };
  return <div className='weather'>{statusIcon()}</div>;
}

export default Weather;
