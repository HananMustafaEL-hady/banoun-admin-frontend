import {
  Get_Events_Pending,
  Get_Event,
  Error_Event,
  Get_Event_accepted,
  Delete_event,
  Event_accepted,
} from "../actions/types";
const initialState = {
  EventsPending: [],
  Eventaccepted: [],
  event: null,
  loading: true,
  error: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case Get_Events_Pending:
      return {
        ...state,
        EventsPending: payload,
        loading: false,
      };
    case Error_Event:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case Get_Event:
      return {
        ...state,
        event: payload,
        loading: false,
      };

    case Delete_event:
      return {
        ...state,

        EventsPending: state.EventsPending.filter(
          (event) => event._id !== payload
        ),

        loading: false,
      };

    case Event_accepted: {
      return {
        ...state,
        Eventaccepted: [payload, ...state.Eventaccepted],
        EventsPending: state.EventsPending.filter(
          (event) => event._id !== payload._id
        ),

        loading: false,
      };
    }

    case Get_Event_accepted: {
      return {
        ...state,
        Eventaccepted: payload,
        loading: false,
      };
    }
    default:
      return state;
  }
}
