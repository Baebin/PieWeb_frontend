import axios from "axios";
import { produce } from "immer";
import { createAction, handleActions } from "redux-actions"

const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

const logout = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

const init = {
    id: null,
    is_login: false,
}

const signupAPI = (id, pw, pw_confirm, navigate) => {
    return function (dispatch, getState) {
        const API = "/api/signup";

        axios.post(
            API,
            {
                "id": id,
                "password": pw,
                "passwordConfirm": pw_confirm,
            },
        )
        .then((res) => {
            window.alert('회원가입 성공!')
            navigate('/signin')
        }).catch((error) => {
            console.log(error.response.data);
            window.alert(error.response.data.message);
        })
    }
}

const signinAPI = (id, pw, navigate) => {
    return function (dispatch, getState) {
        const API = "/api/signin";

        axios.post(
            API,
            {
                "id": id,
                "password": pw,
            },
        ).then((res) => {
            if (res.data.token) {
                localStorage.setItem("auth_token", res.data.token);
                localStorage.setItem("auth_id", id);
                dispatch(
                    setUser({
                        id: id,
                    })
                );
                window.alert('로그인 성공!');
                navigate('/');
            }
        }).catch((error) => {
            console.log(error.response.data);
            window.alert(error.response.data.message);
        });
    };
};

const logoutAPI = (navigate) => {
    return function (dispatch, getState) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_id")

        dispatch(logout());

        window.alert('로그아웃 되었습니다.');
        navigate('/');

        window.location.reload();
    }
}

const loginCheckAPI = () => {
    return function (dispatch, getState) {
        const token = localStorage.getItem("auth_token");
        const id = localStorage.getItem("auth_id");

        if (token) {
            dispatch(setUser({
                id: id,
            }));
        } else {
            return;
        }
    }
};

// Reducers
export default handleActions(
    {
        [SET_USER]: (state, action) => produce(state, (draft) => {
            draft.id = action.payload.user.id;
            draft.is_login = true;
        }),
        [LOG_OUT]: (state, action) => produce(state, (draft) => {
            draft.id = null;
            draft.is_login = false;
        }),
    },
    init
);

const actionCreators = {
    signupAPI,
    signinAPI,
    logoutAPI,
    loginCheckAPI,
};

export { actionCreators };