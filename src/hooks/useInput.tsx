import { nanoid } from "@reduxjs/toolkit";
import { useMemo, useState } from "react";

const useInput = (validationFn = (val) => val, classes: any = []) => {
  const id = useMemo(() => nanoid(), []);
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validationFn(value);
  const hasError = isTouched && !isValid;

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const touchHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  const controlClasses = hasError
    ? [classes.Form__control, classes.error].join(" ")
    : classes.Form__control;

  return {
    value,
    isTouched,
    isValid,
    changeHandler,
    touchHandler,
    reset,
    controlClasses,
    id,
  };
};

export default useInput;
