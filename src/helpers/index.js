import axios from "axios";
import { SET_ERROR, loading, loadResult } from '../redux/actions';

export const getRepos = (searchUsername) => {
    return async (dispatch) => {
      dispatch(loading(searchUsername));
      try {
          const repos = await fetchGithubRepos(searchUsername);
          const user = await fetchGithubUser(searchUsername);
          dispatch(loadResult({ result: { repos, user } }));
      } catch (err) {
          console.warn(err.message);
          dispatch({ type: SET_ERROR, payload: err.message });
      }
    }
}
  
const fetchGithubRepos = async (searchUsername) => {
    try {
        const response = await axios.get(
        `https://api.github.com/users/${searchUsername}/repos`
    );
        console.log(response.data)
        return response.data;
    } catch (err) {
        if (response.status === 404) {
            throw Error("Error retrieving repos: there's no github account with that username.");
        }
        throw new Error(err.message);
    }
};
  
const fetchGithubUser = async (searchUsername) => {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${searchUsername}`
        );
        return response.data;
    } catch (err) {
        if (response.status === 404) {
            throw Error("Error retrieving user: there's no github account with that username.");
        }
        throw new Error (err.message);
    }
}