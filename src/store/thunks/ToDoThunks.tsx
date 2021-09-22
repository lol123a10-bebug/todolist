import axios from "axios";
import { url } from "../../constants/network";
import { todoActions } from "../slices/ToDoSlice";
import { UIActions } from "../slices/UISlice";

export const getList = () => async (dispatch) => {
  dispatch(UIActions.setLoading(true));

  const response = await axios.get(url + "/todos.json");
  dispatch(todoActions.replaceTodoList(response.data ? response.data : []));

  dispatch(UIActions.setLoading(false));
};

export const putList = (list) => async (dispatch) => {
  dispatch(UIActions.setLoading(true));

  await axios.put(url + "/todos.json", list);

  dispatch(UIActions.setLoading(false));
};
