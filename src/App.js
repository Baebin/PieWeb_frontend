import React from 'react';
import './App.css';
import './css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';

import HomeComponent from './components/Home'
import HeaderComponent from './components/Header'
import TesterComponent from './components/Tester';
import NotFoundComponent from './components/NotFound'

import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

import WritePage from './pages/Write';

function App() {
    return(
        <React.Fragment>
            <div className="App">
                <HeaderComponent />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/tester" element={<TesterComponent />} />
                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/write" element={<WritePage />} />
                    <Route path="/*" element={<NotFoundComponent />} />
                </Routes>
            </div>
        </React.Fragment>
    );
}

export default App;