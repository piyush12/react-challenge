import React, { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import Input from "./Input";
import "./styles.css";

const numOfInput = 4;
const BACKSPACE = 8;

function OtpValidator() {
  const inputArray = new Array(numOfInput).fill("");
  const [otpInputValue, setOtpInputValue] = useState([...inputArray]);
  const otpInputRef = useRef<any>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;
    if (!value) return;
    let newOtpInputValue = [...otpInputValue];
    newOtpInputValue[index] = value;
    setOtpInputValue([...newOtpInputValue]);
    if (otpInputRef.current && otpInputRef.current.children[index + 1]) {
      otpInputRef.current.children[index + 1].focus();
    }
  };

  const handleKeyChange = (
    event: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace" || event.keyCode === BACKSPACE) {
      let newOtpInputValue = [...otpInputValue];
      newOtpInputValue[index] = "";
      setOtpInputValue([...newOtpInputValue]);
      if (otpInputRef.current && otpInputRef.current.children[index - 1]) {
        otpInputRef.current.children[index - 1].focus();
      }
    }
  };

  return (
    <div className='wrapper'>
      <h1>Authorization Code</h1>
      <p>Please enter the code that we sent to (***) *** - 2819.</p>
      <form action=''>
        <div className='fields' ref={otpInputRef}>
          {otpInputValue.map((value, index) => (
            <Input
              type='text'
              name={`verification_${index}`}
              maxLength={1}
              onChange={(event) => handleChange(event, index)}
              value={value}
              key={`verification_${index}`}
              onKeyUp={(event) => handleKeyChange(event, index)}
            />
          ))}
        </div>
        <button>Verify</button>
      </form>
    </div>
  );
}

export default OtpValidator;
