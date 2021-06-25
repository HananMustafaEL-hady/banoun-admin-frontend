import {
  OPEN_SUCCESS_ALERT,
  OPEN_INFO_ALERT,
  OPEN_ERROR_ALERT,
  CLOSE_SUCCESS_ALERT,
  CLOSE_INFO_ALERT,
  CLOSE_ERROR_ALERT,
} from "../types";

export const openErrorAlert = (msg) => {
  return {
    type: OPEN_ERROR_ALERT,
    payload: msg,
  };
};

export const closeErrorAlert = () => {
  return {
    type: CLOSE_ERROR_ALERT,
  };
};

export const openInfoAlert = (msg) => {
  return {
    type: OPEN_INFO_ALERT,
    payload: msg,
  };
};

export const closeInfoAlert = () => {
  return {
    type: CLOSE_INFO_ALERT,
  };
};

export const openSuccessAlert = (msg) => {
  return {
    type: OPEN_SUCCESS_ALERT,
    payload: msg,
  };
};

export const closeSuccessAlert = () => {
  return {
    type: CLOSE_SUCCESS_ALERT,
  };
};
