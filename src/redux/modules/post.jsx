import axios from "axios";
import { produce } from "immer";
import { createAction, handleActions } from "redux-actions"

const SAVE = "SAVE";
const SET_USER = "SET_USER";

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
            window.alert(error.response.data.message);
        });
    }
}


const actionCreators = {
    saveAPI,
};

export { actionCreators };