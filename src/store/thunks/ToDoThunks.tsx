import { Dispatch } from "redux";
import { getData, putData } from "../../helpers/network-settings";
import { todoActions } from "../slices/ToDoSlice";

export const getList = () => async (dispatch: Dispatch<any>) => {
  const data = await getData("/todos.json");

  dispatch(todoActions.replaceTodoList(data ? data : []));
};

export const putList = (list: any[]) => async () => {
  const data = await putData("/todos.json", list);
  return data;
};
