// action types
export const LOADING = "LOADING";
export const LOAD_RESULT = "LOAD_RESULT";
export const SET_ERROR = "SET_ERROR";

// action creators
export const loading = (username) => ({
  type: "LOADING", 
  payload: username 
});

export const loadResult = ({ result: { repos, user }}) => ({
  type: "LOAD_RESULT",
  payload: { repos, user },
});