import { createStore, applyMiddleware,compose } from "redux";
import { addTodo } from "./reducer/addTodo.reducer";
import logger from "redux-logger";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [ logger];
console.log("middd", middleware)
export const store = createStore(addTodo,composeEnhancers(applyMiddleware(...middleware)));
