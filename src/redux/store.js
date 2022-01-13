import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import searchReducer from './searchReducer'
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  searchReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;