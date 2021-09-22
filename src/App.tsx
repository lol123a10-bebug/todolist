import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/useApp";
import ToDo from "./pages/ToDo/ToDo";
import { getList, putList } from "./store/thunks/ToDoThunks";

let isInitial = true;

const App = () => {
  const { todoList } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    const timer = setTimeout(() => dispatch(putList(todoList)), 300);
    return () => clearTimeout(timer);
  }, [dispatch, todoList]);

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
    <div>
      <ToDo />
    </div>
  );
};

export default App;
