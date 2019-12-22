import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndRelatedUser = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    // --->readable code
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach((userId)=> {
    //     dispatch(fetchUser(userId));
    // })

    // --->more advance
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(userId => dispatch(fetchUser(userId)))
        .value();
};
export const fetchPosts = () => async (dispatch) => {
    const res = await jsonPlaceholder.get('/posts');
    dispatch({
        type: "FETCH_POSTS",
        payload: res.data
    });
};

export const fetchUser = (userId) => async (dispatch) => {
    const res = await jsonPlaceholder.get(`/users/${userId}`);
    dispatch({
        type: "FETCH_USER",
        payload: res.data
    })
};