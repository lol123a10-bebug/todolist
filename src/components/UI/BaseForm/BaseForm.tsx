import clsx from "clsx";
import { FormEvent } from "react";
import useInput from "../../../utils/hooks/useInput";
import Button from "../Button/Button";
import classes from "./BaseForm.module.scss";

const validateText = (val: string) => val.trim() && val.length > 5;

const BaseForm = (props) => {
  const {
    initTitle = "",
    initDescription = "",
    cancel,
    submit,
    className,
    style,
  } = props;

  const {
    value: titleValue,
    changeHandler: titleChangeHandler,
    touchHandler: titleTouchHandler,
    reset: titleReset,
    controlClasses: titleControlClasses,
    id: titleId,
    isValid: titleIsValid,
  } = useInput(validateText, classes, initTitle);

  const {
    value: descriptionValue,
    changeHandler: descriptionChangeHandler,
    touchHandler: descriptionTouchHandler,
    reset: descriptionReset,
    controlClasses: descriptionControlClasses,
    id: descriptionId,
    isValid: descriptionIsValid,
  } = useInput(validateText, classes, initDescription);

  const cancelTODOAddForm = () => {
    cancel();
  };

  const formIsValid = titleIsValid && descriptionIsValid;

  const submitFormHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    submit({ title: titleValue, description: descriptionValue });

    cancelTODOAddForm();
    titleReset();
    descriptionReset();
  };

  return (
    <form
      className={clsx(classes.Form, className)}
      style={{ ...style }}
      onSubmit={submitFormHandler}
    >
      <div className={titleControlClasses}>
        <label htmlFor={titleId}>Title: </label>
        <input
          id={titleId}
          type="text"
          onBlur={titleTouchHandler}
          onChange={titleChangeHandler}
          value={titleValue}
        />
      </div>
      <div className={descriptionControlClasses}>
        <label htmlFor={descriptionId}>Description: </label>
        <input
          id={descriptionId}
          type="text"
          onBlur={descriptionTouchHandler}
          onChange={descriptionChangeHandler}
          value={descriptionValue}
        />
      </div>
      <div className={classes.Form__buttons}>
        <Button onClick={cancelTODOAddForm}>Cancel</Button>
        <Button type="submit" disabled={!formIsValid}>
          Accept
        </Button>
      </div>
    </form>
  );
};

export default BaseForm;
