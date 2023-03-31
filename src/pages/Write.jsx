import React, { useState } from 'react';
import '../css/bootstrap.min.css';

import { useDispatch } from 'react-redux';
import { actionCreators } from '../redux/modules/post';

import { useNavigate } from 'react-router-dom';

const Write = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const write = () => {
        if (title === "") {
            window.alert("제목이 입력되지 않았습니다.");
            return;
        }

        if (description === "") {
            window.alert("내용이 입력되지 않았습니다.");
            return;
        }
        dispatch(actionCreators.saveAPI(title, description, navigate));
    }

    return (
        <React.Fragment>
            <div className='container'>
                <h1>
                    SignUP Form
                </h1>
            </div>
            <div className='container'>
            <input type="text"
                    name="title"
                    class="form-control mt-4 mb-2"
                    placeholder="제목을 입력해주세요."
                    required
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}>    
                </input>
                <input type="text"
                    name="description"
                    class="form-control mt-4 mb-2"
                    placeholder="내용을 입력해주세요."
                    required
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}>    
                </input>
                <div class="d-grid gap-2">
                    <button class="btn btn-lg btn-primary"
                        type="submit"
                        onClick={write}
                        >
                        게시
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Write;