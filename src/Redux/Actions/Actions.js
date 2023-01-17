import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";




export const login = (email, password, navigate) => {
  console.log("email, password", email, password);
  console.log("---");

  // const company_id = "company_43468880dbdd4ab6873091d5129644cf "

  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
   const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json",
};
    const body = {
      email,
      password
    };
    axios
      .post("https://stage.api.sloovi.com/login?product=outreach", body, {
        headers
      })
      .then((response) => {
        console.log("responseve data", response.data);
        console.log("result", response.data.results);
        console.log("access_token", response.data.results.token);
        console.log("company_id", response.data.results.company_id);
        console.log("user_id", response.data.results.user_id);
        console.log(response.data.code);

        if (response.status === 200) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: {
              access_token: response.data.results.token,
              company_id: response.data.results.company_id,
              user_id: response.data.results.user_id
            }
          });
        //   window.sessionStorage.setItem(
        //     "access_token",
        //     response.data.results.token
        //   );
        //   window.sessionStorage.setItem(
        //     "company_id",
        //     response.data.results.company_id
        //   );
        //   window.sessionStorage.setItem(
        //     "user_id",
        //     response.data.results.user_id
        //   );
          navigate("/create");
        } else {
          dispatch({ type: LOGIN_FAILURE });
        }
      })
      .catch((error) => {
        dispatch({ type: LOGIN_FAILURE });
      });
  };
};





//fetching actions



const TASKS_URL =
  "https://stage.api.sloovi.com/task/lead_745cdc05ef6a43f7985e408c85a4fef1?company_id=company_43468880dbdd4ab6873091d5129644cf";



const headers = {
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM5NTYxMTAsIm5iZiI6MTY3Mzk1NjExMCwianRpIjoiM2Q1M2NhNmEtZGEyMS00MjBjLWE1N2QtMWE5YmMwNjJkZGE1IiwiaWRlbnRpdHkiOnsibmFtZSI6Ik1hcnRpbiBMdXRoYXIiLCJlbWFpbCI6InZvcGV2bzc3MzdAdnBzcmVjLmNvbSIsInVzZXJfaWQiOiJ1c2VyX2QwZTUyYWFhMDRjNDRiNjE5OWExOGU4YzgxMWIyM2UyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci8zN2Q5MzU0ZjU1Njg4MmRmMWNmNzk5ZDdlMjExNzdjMj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.BsQFE6jzl4L_rDvLg1-ndGur8wV2rnkpcVqeeqbSsFg",
  "Accept": "application/json",
  "Content-Type": "application/json",
};


export const FETCH_TASKS = "FETCH_TASKS";
export const ADD_NEW_TASK = "ADD_NEW_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const fetchTasks = () => (dispatch) => {
  dispatch({ type: FETCH_TASKS + "_PENDING" });
  axios
    .get(TASKS_URL, { headers: headers })
    .then((response) => {
      const tasks = response.data;
      console.log("fetchTasks",tasks)
      console.log("fetchTasks-result",tasks.results)
      dispatch({ type: FETCH_TASKS + "_FULFILLED", payload: tasks.results });
    })
    .catch((error) => {
      dispatch({ type: FETCH_TASKS + "_REJECTED", payload: error });
    });
};

export const addNewTask = (task) => (dispatch) => {
    console.log('action-task',task)
  axios
    .post(TASKS_URL, task, { headers: headers })
    .then((response) => {
        console.log("action-addnewtask", response.data)
      dispatch({ type: ADD_NEW_TASK, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const editTask = (taskDetails) => (dispatch) => {
  const { id, edited_task } = taskDetails;
  axios
    .put(
      `https://stage.api.sloovi.com/task/lead_745cdc05ef6a43f7985e408c85a4fef1/${id}?company_id=company_43468880dbdd4ab6873091d5129644cf `,
      edited_task,
      { headers: headers }
    )
    .then((response) => {
      dispatch({ type: EDIT_TASK, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
};


export const deleteTask = (id) => (dispatch) => {
    axios
      .delete(
        `https://stage.api.sloovi.com/task/lead_745cdc05ef6a43f7985e408c85a4fef1/${id}?company_id=company_43468880dbdd4ab6873091d5129644cf `,
        { headers: headers }
      )
      .then((response) => {
        dispatch({ type: DELETE_TASK, payload: id });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  



  //fetching users.

  export const FETCH_USERS = "FETCH_USERS";


  
const USERS_URL =
"https://stage.api.sloovi.com/team?product=outreach&company_id=company_43468880dbdd4ab6873091d5129644cf";



export const fetchUsers = () => (dispatch) => {
  dispatch({ type: FETCH_USERS + "_PENDING" });
  axios
    .get(USERS_URL, { headers: headers })
    .then((response) => {
      const users = response.data;
      console.log("fetchUsers",users)
      console.log("fetchUsers-result",users.results)
      dispatch({ type: FETCH_USERS + "_FULFILLED", payload: users.results });
    })
    .catch((error) => {
      dispatch({ type: FETCH_USERS + "_REJECTED", payload: error });
    });
};
