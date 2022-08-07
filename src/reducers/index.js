import { combineReducers } from "redux";

import postsReducer from "./postsReducer";

export default combineReducers({
    // Add your reducers here
    posts: postsReducer,
});
