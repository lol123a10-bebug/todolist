import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../hooks/useApp";
import useInput from "../../../hooks/useInput";
import { todoActions } from "../../../store/slices/ToDoSlice";
import Button from "../../UI/Button/Button";
import classes from "./ToDoCreate.module.scss";

const validateText = (val) => val.trim() && val.length > 5;

const ToDoCreate = (props) => {
  const dispatch = useAppDispatch();
  const {
    value: titleValue,
    changeHandler: titleChangeHandler,
    touchHandler: titleTouchHandler,
    reset: titleReset,
    controlClasses: titleControlClasses,
    id: titleId,
    isValid: titleIsValid,
  } = useInput(validateText, classes);

  const {
    value: descriptionValue,
    changeHandler: descriptionChangeHandler,
    touchHandler: descriptionTouchHandler,
    reset: descriptionReset,
    controlClasses: descriptionControlClasses,
    id: descriptionId,
    isValid: descriptionIsValid,
  } = useInput(validateText, classes);

  const formIsValid = titleIsValid && descriptionIsValid;

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    dispatch(
      todoActions.addItemToList({
        id: nanoid(),
        title: titleValue,
        description: descriptionValue,
        done: false,
      })
    );

    titleReset();
    descriptionReset();
  };

  return (
    <div className={classes.Form__wrapper}>
      <form className={classes.Form} onSubmit={submitFormHandler}>
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
          <Button>Cancel</Button>
          <Button type="submit" disabled={!formIsValid}>
            Accept
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ToDoCreate;