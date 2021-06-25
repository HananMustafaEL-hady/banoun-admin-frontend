import {
  Error_specialist,
  Get_specialist,
  Get_One_specialist,
  Delete_specialist,
} from "../actions/types";
const initialState = {
  specialists: [],
  specialist: null,
  loading: true,
  error: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case Get_specialist:
      return {
        ...state,
        specialists: payload,
        loading: false,
      };
    case Error_specialist:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case Get_One_specialist:
      return {
        ...state,
        specialist: payload,
        loading: false,
      };
    case Delete_specialist:
      return {
        ...state,

        specialists: state.specialists.filter(
          (specialist) => specialist._id !== payload
        ),

        loading: false,
      };
    default:
      return state;
  }
}
