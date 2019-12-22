import {combineReducers} from "redux";
import postsReducer from './postsReducer';


const REDUCERS = {
    posts: postsReducer,

};
export default combineReducers(REDUCERS);