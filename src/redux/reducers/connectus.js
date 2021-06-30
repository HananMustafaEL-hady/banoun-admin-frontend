import {
  Get_All_connectus,
  send_connectus,
  Error_connectus,
  Delete_connectus,
} from "../actions/types";
const initialState = {
  connectus: [],
  event: null,
  loading: true,
  error: {},
  mes: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case send_connectus:
      return {
        ...state,
        mes: payload,
        loading: false,
      };
    case Get_All_connectus:
      return {
        ...state,
        connectus: payload,
        loading: false,
      };
    case Error_connectus:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case Delete_connectus:
      return {
        ...state,

        connectus: state.connectus.filter((item) => item._id !== payload),

        loading: false,
      };
    default:
      return state;
  }
}
