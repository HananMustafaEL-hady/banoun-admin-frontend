import { client } from "../../services/client";

import {
  Error_specialist,
  Get_specialist,
  Get_One_specialist,
  Delete_specialist,
} from "./types";

export const GetAllSpecialist = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await client.get("/specialist/Doc/Pending", config);
    dispatch({
      type: Get_specialist,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: Error_specialist,
      payload: { msg: err },
    });
  }
};

export const GetOneSpecialist = (id) => async (dispatch) => {
  try {
    const res = await client.get(`/specialist/${id}`);
    dispatch({
      type: Get_One_specialist,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: Error_specialist,
      payload: { msg: err },
    });
  }
};

export const DeleteOneSpecialist = (id) => async (dispatch) => {
  try {
    const res = await client.delete(`/specialist/${id}`);
    dispatch({
      type: Delete_specialist,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: Error_specialist,
      payload: { msg: err },
    });
  }
};

export const ApprovalSpecialist = (id) => async (dispatch) => {
  try {
    const res = await client.patch(`/specialist/${id}`);
    dispatch({
      type: Get_One_specialist,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: Error_specialist,
      payload: { msg: err },
    });
  }
};
