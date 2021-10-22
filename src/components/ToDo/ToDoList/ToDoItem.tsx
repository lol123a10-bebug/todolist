import { useState } from "react";
import { useAppDispatch } from "../../../hooks/useApp";
import { todoActions } from "../../../store/slices/ToDoSlice";
import Button from "../../UI/Button/Button";
import Edit from "../Edit/Edit";
import classes from "./ToDoItem.module.scss";

const ToDoItem = (props) => {
  const { id, title, description, done } = props;

  const dispatch = useAppDispatch();
  const { toggleDoneOfListItem, removeItemFromList, setItem } = todoActions;

  const [edit, setEdit] = useState(false);

  const modifiedClassNames = done
    ? [classes.ToDoItem, classes.done].join(" ")
    : classes.ToDoItem;

  const doneButtonHandler = () => {
    dispatch(toggleDoneOfListItem({ id }));
  };

  const removeButtonHandler = () => {
    dispatch(removeItemFromList({ id }));
  };

  const editButtonHandler = () => {
    setEdit((prevState) => !prevState);
  };

  const onEditSubmitHandler = (data) => {
    const { title, description } = data;
    dispatch(setItem({ id, title, description }));
  };

  return (
    <>
      {edit && (
        <Edit
          title={title}
          description={description}
          onCancel={editButtonHandler}
          onSubmit={onEditSubmitHandler}
        />
      )}

      <li className={modifiedClassNames}>
        <div className={classes.ToDoItem__header}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={classes.ToDoItem__buttons}>
          <Button onClick={removeButtonHandler}>Remove</Button>
          <Button onClick={editButtonHandler}>Edit</Button>
          <Button onClick={doneButtonHandler}>
            {done ? "Done" : "Undone"}
          </Button>
        </div>
      </li>
    </>
  );
};

export default ToDoItem;
