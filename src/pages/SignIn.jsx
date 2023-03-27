import React, { useState } from 'react';
import '../css/bootstrap.min.css';

import { useDispatch } from 'react-redux';
import { actionCreators } from '../redux/modules/user';

import { useNavigate } from 'react-router-dom';

const SignIn = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [id, setID] = useState("");
    const [pw, setPW] = useState("");

    const signin = () => {
        if (id === "" || pw === "") {
            window.alert("입력이 올바르지 않습니다.");
            return;
        }
        dispatch(actionCreators.signinAPI(id, pw, navigate));
    };

    return (
        <React.Fragment>
            <div className='container'>
                <h1>
                    Login Form
                </h1>
            </div>
            <div className='container'>
                <div class="mb-3">
                    <label className="form-label" for="id">아이디</label> 
                    <input className='form-control'
                        style={{ textAlign: 'center' }}
                        type="text"
                        placeholder='아이디를 입력해주세요.'
                        onChange={(e) => {
                            setID(e.target.value);
                        }}
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label" for="pw">비밀번호</label> 
                    <input className='form-control'
                        style={{ textAlign: 'center' }}
                        type="password"
                        placeholder='비밀번호를 입력해주세요.'
                        onChange={(e) => {
                            setPW(e.target.value);
                        }}
                    />
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-lg btn-primary"
                        type="submit"
                        onClick={signin}
                        >
                        로그인
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SignIn;