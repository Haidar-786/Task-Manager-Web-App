import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
  } from "../Actions/Actions";
  
  const initialState = {
    access_token: "",
    company_id: "",
    user_id: "",
    isLoading: false,
    error: ""
  };
  
  const LoginReducer = (state = initialState, action) => {
    console.log("action-payload", action.payload);
    // console.log("action-payload",action.payload.access_token);
    // console.log("action-payload", action.payload.company_id);
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          isLoading: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          access_token: action.payload.access_token,
          company_id: action.payload.company_id,
          user_id: action.payload.user_id,
          isLoading: false
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          error: "Error Occured!",
          isLoading: false
        };
      default:
        return state;
    }
  };
  
  export default LoginReducer;
  