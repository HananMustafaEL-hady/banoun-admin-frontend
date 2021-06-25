import { client } from "../../services/client";

import {
  Get_Events_Pending,
  Get_Event,
  Error_Event,
  Get_Event_accepted,
  Delete_event,
} from "./types";

export const GetEventsPending = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await client.get("/event/Pending", config);
    dispatch({
      type: Get_Events_Pending,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: Error_Event,
      payload: { msg: err },
    });
  }
};

export const DeleteOneSevent = (id) => async (dispatch) => {
  try {
    const res = await client.delete(`/event/${id}`);
    dispatch({
      type: Delete_event,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: Error_Event,
      payload: { msg: err },
    });
  }
};

export const GetOneEvent = (id) => async (dispatch) => {
  try {
    const res = await client.get(`/event/${id}`);
    dispatch({
      type: Get_Event,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: Error_Event,
      payload: { msg: err },
    });
  }
};
