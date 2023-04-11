import { createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { usersReducer } from "./usersReducer";
import { postsReducer } from "./postsReducer";
import { todosReducer } from "./todosReducer";


const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  todos: todosReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
