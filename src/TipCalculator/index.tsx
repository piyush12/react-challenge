import React, { ReactElement, useState } from "react";
import View from "./View";
import "./styles.css";
import TipPercentage from "./TipPercentage";
import TipFields from "./TipFields";

// Can be used Context Api to avoid prop drilling and lifting state up

function TipCalculator(): ReactElement {
  const [tipAmount, setTipAmount] = useState<string>("0");
  const [perPerson, setPerPerson] = useState<number>(0);
  const [tipPercent, setTipPercent] = useState<string>("0");
  const [numOfPeople, setNumOfPeople] = useState<string>("0");
  const [billAmount, setBillAmount] = useState<number>(0);

  const calculateTip = (): void => {
    const tAmount = ((Number(billAmount) * parseInt(tipPercent)) / 100).toFixed(
      2
    );
    const totalBill = Number(billAmount.toFixed(2)) + Number(tAmount);
    const totalPerPerson = Number(totalBill) / Number(numOfPeople);
    setPerPerson(totalPerPerson);
    setTipAmount(tAmount);
  };

  return (
    <div className='wrapper'>
      <View label='Tip Amount' price={tipAmount} />
      <View label='Total Per Person' price={perPerson.toFixed(2)} />

      <TipFields
        people={(value: string) => setNumOfPeople(value)}
        billAmt={(value: string) => setBillAmount(Number(value))}
      />
      <TipPercentage tip={(value: string) => setTipPercent(value)} />

      <div className='button-wrapper'>
        <button id='calculate' onClick={calculateTip}>
          Calculate
        </button>
      </div>
    </div>
  );
}

export default TipCalculator;
