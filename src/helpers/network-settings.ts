import axios from "axios";
import { url } from "../constants/network";
import store from "../store";
import { UIActions } from "../store/slices/UISlice";
import { logger } from "./logger";

const { dispatch } = store;
const { setLoading } = UIActions;

export const getData = async (params: string) => {
  const processData = async () => {
    dispatch(setLoading(true));
    const response = await axios.get(url + params);
    dispatch(setLoading(false));

    return response.data;
  };

  try {
    return await processData();
  } catch (error) {
    logger(error, "error");
  }
};

// export const getData = async (params: string) => {
//   try {
//     dispatch(setLoading(true));
//     const response = await axios.get(url + params);
//     dispatch(setLoading(false));

//     return response.data;
//   } catch (error) {
//     logger(error.message);
//   }
// };

// export const getData = (params: string) => {
//   dispatch(setLoading(true));

//   const data = axios
//     .get(url + params)
//     .then((response) => {
//       dispatch(setLoading(false));
//       return response.data;
//     })
//     .catch(logger);

//   return data;
// };

export const putData = async (params: string, body: any) => {
  try {
    const response = await axios.put(url + params, body);

    return response.data;
  } catch (error) {
    logger(error, "error");
  }
};
