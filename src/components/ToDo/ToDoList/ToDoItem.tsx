import { useState } from "react";
import Button from "../../UI/Button/Button";
import Edit from "../Edit/Edit";
import classes from "./ToDoItem.module.scss";
import clsx from "clsx";
import { servicesApi } from "../../../services";
import { ITodo } from "../../../utils/models/ITodo";
import Loading from "../../UI/Loading/Loading";

const ToDoItem = (props) => {
  const { id, title, description, done } = props;
  const todo = {
    id,
    title,
    description,
    done,
  };

  const [updateTodo, { isLoading }] = servicesApi.useUpdateTodoMutation();

  const [edit, setEdit] = useState(false);

  const doneButtonHandler = () => {
    updateTodo({ ...todo, done: !done });
  };

  const removeButtonHandler = () => {
    // dispatch(removeItemFromList({ id }));
  };

  const editButtonHandler = () => {
    setEdit((prevState) => !prevState);
  };

  const onEditSubmitHandler = (data) => {
    const { title, description } = data;
    updateTodo({ id, title, description } as ITodo);
  };

  return (
    <>
      {isLoading && <Loading />}
      {edit && (
        <Edit
          title={title}
          description={description}
          onCancel={editButtonHandler}
          onSubmit={onEditSubmitHandler}
        />
      )}

      <li className={clsx(classes.ToDoItem, { [classes.done]: done })}>
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
