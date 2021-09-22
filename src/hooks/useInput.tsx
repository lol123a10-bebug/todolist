import { useState } from "react"

const useInput = (validationFn = (val) => val) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validationFn(value);
  const hasError = isTouched && !isValid;

  const changeHandler = (e) => {
    setValue(e.target.value)
  }

  const touchHandler = () => {
    setIsTouched(true);
  }

  const reset = () => {
    setValue('')
    setIsTouched(false);
  }

  const errorClassNames = hasError ? 'error' : '';

  return { value, isTouched, isValid, changeHandler, touchHandler, reset, errorClassNames }

}

export default useInput;