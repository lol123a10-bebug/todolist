import CreateToDo from "../../components/ToDo/ToDoCreate/ToDoCreate";
import ListToDo from "../../components/ToDo/ToDoList/ToDoList";
import Button from "../../components/UI/Button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/useApp";
import { UIActions } from "../../store/slices/UISlice";

const ToDo = (props) => {
  const { todoCreateIsVisible } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const addTODOButtonHandler = () => {
    dispatch(UIActions.toDoCreateToggle());
  };

  return (
    <div>
      {!todoCreateIsVisible && (
        <Button
          onClick={addTODOButtonHandler}
          style={{ margin: "4rem auto", display: "block" }}
        >
          Add TODO
        </Button>
      )}
      {todoCreateIsVisible && <CreateToDo />}
      <ListToDo />
    </div>
  );
};

export default ToDo;
