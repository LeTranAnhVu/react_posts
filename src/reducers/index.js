import {combineReducers} from "redux";
import postsReducer from './postsReducer';
import usersReducer from "./usersReducer";

const REDUCERS = {
    posts: postsReducer,
    users: usersReducer

};
export default combineReducers(REDUCERS);