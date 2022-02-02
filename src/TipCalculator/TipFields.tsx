import React, { useState } from "react";
import Input from "./Input";
import InputView from "./InputView";

function TipFields({
  billAmt,
  people,
}: {
  billAmt: (v: string) => void;
  people: (v: string) => void;
}) {
  const [billAmount, setBillAmount] = useState<number | string>(0);
  const [numOfPeople, setNumOfPeople] = useState<number | string>(0);

  return (
    <div className='input-fields'>
      <InputView
        className='bill-amount'
        text='Bill Amount'
        field={
          <Input
            value={billAmount}
            name='bill-amount'
            onChange={(event) => {
              setBillAmount(event.target.value);
              billAmt(event.target.value);
            }}
          />
        }
      />

      <InputView
        className='number-of-people'
        text='Number of People'
        field={
          <div className='field'>
            <Input
              value={numOfPeople}
              name='number-of-people'
              onChange={(event) => {
                setNumOfPeople(event.target.value);
                people(event.target.value);
              }}
            />
          </div>
        }
      />
    </div>
  );
}

export default TipFields;
