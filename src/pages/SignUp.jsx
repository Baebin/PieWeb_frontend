import React, { useState } from 'react';
import '../css/bootstrap.min.css';

import { useDispatch } from 'react-redux';
import { actionCreators } from '../redux/modules/user';

import { history } from '../redux/store';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [id, setID] = useState("");
    const [pw, setPW] = useState("");
    const [pw_confirm, setPwConfirm] = useState("");

    const signup = () => {
        let id_check = /^[a-zA-z0-9]{4,12}$/;
        let pw_check = /^[a-zA-z0-9]{4,20}$/;

        if (id === "") {
            window.alert("아이디가 입력되지 않았습니다.");
            return;
        }

        if (pw === "") {
            window.alert("비밀번호가 입력되지 않았습니다.");
            return;
        }

        if (pw !== pw_confirm) {
            window.alert("비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        if (!id_check.test(id)) {
            window.alert("아이디는 영문 대소문자와 숫자 4 ~ 12 자리로 입력해주세요.");
            return;
        }

        if (!pw_check.test(pw)) {
            window.alert("비밀번호는 영문 대소문자와 숫자 4 ~ 12 자리로 입력해주세요.");
            return;
        }
        dispatch(actionCreators.signupAPI(id, pw, pw_confirm, navigate));
    }

    return (
        <React.Fragment>
            <div className='container'>
                <h1>
                    SignUP Form
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
                <div class="mb-3">
                    <label class="form-label" for="pw_confirm">비밀번호 재입력</label> 
                    <input className='form-control'
                        style={{ textAlign: 'center' }}
                        type="password"
                        placeholder='비밀번호를 다시 입력해주세요.'
                        onChange={(e) => {
                            setPwConfirm(e.target.value);
                        }}
                    />
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-lg btn-primary"
                        type="submit"
                        onClick={signup}
                        >
                        회원가입
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SignUp;