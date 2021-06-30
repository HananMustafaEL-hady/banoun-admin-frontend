import { client } from "../../services/client";

import {
  Get_All_connectus,
  send_connectus,
  Error_connectus,
  Delete_connectus,
} from "./types";

export const Getconnectus = () => async (dispatch) => {
  try {
    const res = await client.get("/connectus");
    dispatch({
      type: Get_All_connectus,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: Error_connectus,
      payload: { msg: err },
    });
  }
};

export const Deleteconnectus = (id) => async (dispatch) => {
  try {
    const res = await client.delete(`/connectus/${id}`);
    dispatch({
      type: Delete_connectus,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: Error_connectus,
      payload: { msg: err },
    });
  }
};

export const sendconnectus = (id, text) => async (dispatch) => {
  console.log(text);
  try {
    const res = await client.post(`/connectus/send/${id}`, text);
    dispatch({
      type: send_connectus,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: Error_connectus,
      payload: { msg: err },
    });
  }
};
