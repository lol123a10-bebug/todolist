import { useAppSelector } from "../../../hooks/useApp";
import ToDoItem from "./ToDoItem";
import classes from "./ToDoList.module.scss";

const ToDoList = (props) => {
  const { todoList } = useAppSelector((state) => state.todo);

  return (
    <ul className={classes.ToDoList}>
      {todoList.map((item) => (
        <ToDoItem
          key={item.id}
          title={item.title}
          description={item.description}
          done={item.done}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
