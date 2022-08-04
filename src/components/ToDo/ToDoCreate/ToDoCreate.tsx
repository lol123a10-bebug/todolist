import { useAppDispatch } from "../../../utils/hooks/useApp";
import { UIActions } from "../../../store/slices/UISlice";
import BaseForm from "../../UI/BaseForm/BaseForm";
import classes from "./ToDoCreate.module.scss";
import { servicesApi } from "../../../services";
import { ITodo } from "../../../utils/models/ITodo";

const ToDoCreate = (props: any) => {
  const [createTodo, {}] = servicesApi.useCreateTodoMutation();

  const dispatch = useAppDispatch();

  const { toDoCreateToggle } = UIActions;

  const cancelTODOAddForm = () => {
    dispatch(toDoCreateToggle());
  };

  const submitFormHandler = async (data: any) => {
    const { title, description } = data;

    await createTodo({ title, description, done: false } as ITodo);
  };

  return (
    <div className={classes.Form__wrapper}>
      <BaseForm cancel={cancelTODOAddForm} submit={submitFormHandler} />
    </div>
  );
};

export default ToDoCreate;
