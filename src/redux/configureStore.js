import { createStore } from "redux";
import modules from "./modules";

const configureStore = initialState => {
  const store = createStore(modules, initialState);
  return store;
};

// git test
export default configureStore;
