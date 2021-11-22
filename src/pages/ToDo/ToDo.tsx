import CreateToDo from "../../components/ToDo/ToDoCreate/ToDoCreate";
import ListToDo from "../../components/ToDo/ToDoList/ToDoList";
import Button from "../../components/UI/Button/Button";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useApp";
import { UIActions } from "../../store/slices/UISlice";
import Loading from "../../components/UI/Loading/Loading";

const ToDo = (props) => {
  const dispatch = useAppDispatch();

  const { todoCreateIsVisible, isLoading } = useAppSelector(
    (state) => state.ui
  );
  const { toDoCreateToggle } = UIActions;

  const addTODOButtonHandler = () => {
    dispatch(toDoCreateToggle());
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
      {isLoading ? <Loading /> : <ListToDo />}
    </div>
  );
};

export default ToDo;
