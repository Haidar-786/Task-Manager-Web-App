import {FETCH_USERS} from '../Actions/Actions'
const initialState = {
    users: [],
    status: "idle",
    error: null,
  };
  export default function Users(state = initialState, action) {
    console.log("reducers-user-action" ,action.payload)

    switch (action.type) {
      case FETCH_USERS + "_PENDING":
        return {
          ...state,
          status: "loading"
        };
      case FETCH_USERS + "_FULFILLED":
        return {
          ...state,
          status: "succeeded",
          users: action.payload
        };
      case FETCH_USERS + "_REJECTED":
        return {
          ...state,
          status: "failed",
          error: action.payload
        };
    
      default:
        return state;
    }
  }
  