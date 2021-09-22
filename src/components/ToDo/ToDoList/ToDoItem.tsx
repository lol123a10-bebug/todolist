import { useAppDispatch } from "../../../hooks/useApp";
import { todoActions } from "../../../store/slices/ToDoSlice";
import Button from "../../UI/Button/Button";
import classes from "./ToDoItem.module.scss";

const ToDoItem = (props) => {
  const { id, title, description, done } = props;
  const dispatch = useAppDispatch();

  const modifiedClassNames = done
    ? [classes.ToDoItem, classes.done].join(" ")
    : classes.ToDoItem;

  const doneButtonHandler = () => {
    dispatch(todoActions.toggleDoneOfListItem({ id }));
  };

  return (
    <li className={modifiedClassNames}>
      <div className={classes.ToDoItem__header}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={classes.ToDoItem__buttons}>
        <Button>Remove</Button>
        <Button>Edit</Button>
        <Button onClick={doneButtonHandler}>{done ? "Done" : "Undone"}</Button>
      </div>
    </li>
  );
};

export default ToDoItem;
