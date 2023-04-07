import axios from "axios";
import { produce } from "immer";
import { createAction, handleActions } from "redux-actions"

const SET_POST = "SET_POST";
const SET_POSTS = "SET_POSTS";

const setPost = createAction(SET_POST, (post) => ({ post }));
const setPosts = createAction(SET_POSTS, (posts) => ({ posts }));

const init = {
    id: null,
    is_login: false,
    paging: {
        start: 1,
        ednd: 10,
        current: 1,
    },
    post: null,
    posts: [],
}

const saveAPI = (title, description, navigate) => {
    return function(dispatch, getState) {
        const API = "/api/post/save";
        const token = localStorage.getItem("auth_token");

        console.log(token);
        axios.post(
            API,
            {
            "title": title,
                "description": description,
            },
            {
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json',
                },
            }
        ).then((res) => {
            window.alert('글이 게시되었습니다.');
            navigate('/');
        }).catch((error) => {
            console.log(error.response.data);
            //window.alert(error.response.data.message);
            window.alert('로그인 후 다시 시도해주세요.');
        });
    }
}

const getPostsAPI = () => {
    return function(dispatch, getState) {
        let page = getState().post.paging.current;
        const API = `/api/posts?page=${page}&size=10`;
        axios.get(API)
        .then((res) => {
            return res.data;
        })
        .then((posts) => {
            dispatch(setPosts(posts));
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}

// Reducers
export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {
            draft.post = action.payload.post;
        }),
        [SET_POSTS]: (state, action) => produce(state, (draft) => {
            draft.posts = action.payload.posts;
        }),
    },
    init
);

const actionCreators = {
    saveAPI,
    getPostsAPI,
};

export { actionCreators };