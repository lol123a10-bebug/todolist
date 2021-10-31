import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../utils/hooks/useApp";
import { todoActions } from "../../../store/slices/ToDoSlice";
import { UIActions } from "../../../store/slices/UISlice";
import BaseForm from "../../UI/BaseForm/BaseForm";
import classes from "./ToDoCreate.module.scss";

const ToDoCreate = (props: any) => {
  const dispatch = useAppDispatch();

  const { toDoCreateToggle } = UIActions;
  const { addItemToList } = todoActions;

  const cancelTODOAddForm = () => {
    dispatch(toDoCreateToggle());
  };

  const submitFormHandler = (data: any) => {
    const { title, description } = data;

    dispatch(
      addItemToList({
        id: nanoid(),
        title: title,
        description: description,
        done: false,
      })
    );
  };

  return (
    <div className={classes.Form__wrapper}>
      <BaseForm cancel={cancelTODOAddForm} submit={submitFormHandler} />
    </div>
  );
};

export default ToDoCreate;
