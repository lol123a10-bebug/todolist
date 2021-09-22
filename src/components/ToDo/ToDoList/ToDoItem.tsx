import Button from "../../UI/Button/Button";
import classes from "./ToDoItem.module.scss";

const ToDoItem = (props) => {
  const { title, description, done } = props;

  const modifiedClassNames = done
    ? [classes.ToDoItem, classes.done].join(" ")
    : classes.ToDoItem;

  return (
    <li className={modifiedClassNames}>
      <div className={classes.ToDoItem__header}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={classes.ToDoItem__buttons}>
        <Button>Remove</Button>
        <Button>Edit</Button>
        <Button>Done</Button>
      </div>
    </li>
  );
};

export default ToDoItem;
