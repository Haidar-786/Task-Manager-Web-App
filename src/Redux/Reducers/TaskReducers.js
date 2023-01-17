import {FETCH_TASKS,ADD_NEW_TASK,EDIT_TASK,DELETE_TASK} from '../Actions/Actions'
const initialState = {
    tasks: [],
    status: "idle",
    error: null,
  };
  export default function tasks(state = initialState, action) {
    console.log("reducers-task-action" ,action.payload)
    switch (action.type) {
      case FETCH_TASKS + "_PENDING":
        return {
          ...state,
          status: "loading"
        };
      case FETCH_TASKS + "_FULFILLED":
        return {
          ...state,
          status: "succeeded",
          tasks: action.payload
        };
      case FETCH_TASKS + "_REJECTED":
        return {
          ...state,
          status: "failed",
          error: action.payload
        };
      case ADD_NEW_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload.results]
        };
      case EDIT_TASK:
        return {
          ...state,
          tasks: state.tasks.map((task) => {
            if (task.id === action.payload.id) {
              return action.payload;
            } else {
              return task;
            }
          })
        };
      case DELETE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload)
        };
      default:
        return state;
    }
  }
  