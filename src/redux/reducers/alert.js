export const successAlert = (state = "", action) => {
  switch (action.type) {
    case "OPEN_SUCCESS_ALERT":
      return (state = action.payload);
    case "CLOSE_SUCCESS_ALERT":
      return (state = "");
    default:
      return state;
  }
};

export const infoAlert = (state = "", action) => {
  switch (action.type) {
    case "OPEN_INFO_ALERT":
      return (state = action.payload);
    case "CLOSE_INFO_ALERT":
      return (state = "");
    default:
      return state;
  }
};

export const errorAlert = (state = "", action) => {
  switch (action.type) {
    case "OPEN_ERROR_ALERT":
      return (state = action.payload);
    case "CLOSE_ERROR_ALERT":
      return (state = "");
    default:
      return state;
  }
};
