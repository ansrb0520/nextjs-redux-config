import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";

const initialState = {};

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(thunk))
    : composeWithDevTools(applyMiddleware(thunk));

const makeStore = () => {
  return createStore(rootReducer, initialState, enhancer);
};

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
