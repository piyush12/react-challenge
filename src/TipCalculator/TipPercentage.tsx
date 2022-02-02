import React, { ChangeEvent, ReactElement, useState } from "react";
import Input from "./Input";
import InputView from "./InputView";

interface TipPercentData {
  name: string;
  value: string;
  checked: boolean;
}

const TipPercent = [
  {
    name: "five-percent",
    value: "5",
    checked: false,
  },
  { name: "ten-percent", value: "10", checked: true },
  { name: "fifteen-percent", value: "15", checked: false },
  { name: "twenty-percent", value: "20", checked: false },
];

function TipPercentage({
  tip,
}: {
  tip: (value: string) => void;
}): ReactElement {
  const [tipPercent, setTipPercent] = useState<TipPercentData[]>(TipPercent);

  const handleTipPercent = (event: ChangeEvent<HTMLInputElement>) => {
    const allTip = tipPercent.map((i: TipPercentData) => {
      if (i.value === event.target.value) {
        tip(i.value);
        i.checked = true;
      } else {
        i.checked = false;
      }
      return i;
    });
    setTipPercent([...allTip]);
  };

  return (
    <div className='tip-percentages'>
      {tipPercent.map((item) => (
        <InputView
          key={item.name}
          label={`${item.value}%`}
          field={
            <Input
              value={item.value}
              name='tip'
              type='radio'
              id={item.name}
              checked={item.checked}
              onChange={handleTipPercent}
            />
          }
          labelId={item.name}
        />
      ))}
    </div>
  );
}

export default TipPercentage;
