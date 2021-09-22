import CreateToDo from "../../components/ToDo/ToDoCreate/ToDoCreate";
import ListToDo from "../../components/ToDo/ToDoList/ToDoList";

const ToDo = (props) => {
  return (
    <div>
      <CreateToDo />
      <ListToDo />
    </div>
  );
};

export default ToDo;
