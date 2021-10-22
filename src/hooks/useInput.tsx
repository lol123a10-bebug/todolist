import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useMemo, useState } from "react";

const useInput = (
  validationFn = (val) => val,
  classes: any = [],
  initValue: string
) => {
  const id = useMemo(() => nanoid(), []);
  const [value, setValue] = useState(initValue);
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsValid(validationFn(value)), 300);
    return () => clearTimeout(timer);
  }, [validationFn, value]);

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
