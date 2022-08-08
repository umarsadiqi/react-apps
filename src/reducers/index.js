import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    // Add your reducers here
    posts: postsReducer,
    users: usersReducer,
});
