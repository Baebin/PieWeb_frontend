import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit"

import thunk from "redux-thunk";

// Modules
import User from "./modules/user";
import Post from "./modules/post";

// export const history = createBrowserHistory();

const reducers = combineReducers(
    {
        user: User,
        post: Post,
    }
)

// const middlewares = [thunk.withExtraArgument({ history: history })];

let store = configureStore(
    {
        reducer: reducers,
//        middleware: middlewares,
    }
);

export default store;