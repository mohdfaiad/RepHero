import { SET_AUTH_TOKEN, AUTH_SUCCESS } from "../actions/actions-auth";

const initialState = {
  authToken: null,
  currentUser: null,
  loading: false,
  error: null
};

export const authReducer = (state = initialState, action) => {
  console.log(action, "auth reducer");
  if (action.type === SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken
    });
  } else if (action.type === AUTH_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      currentUser: action.currentUser
    });
  }
  return state;
  console.log(state, "this is current state bra.. from auth reducer");
};
