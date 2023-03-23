import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

import Header from './Layout/Header'
import { Container } from 'react-bootstrap';

function App() {
    const [message, setMessage] = useState();

    const [nickname, setNickname] = useState();
    const [password, setPassword] = useState();


    useEffect(() => {
      fetch("/api/hello")
          .then((response) => {
              return response.text();
          })
          .then((data) => {
              setMessage(data);
          });
    }, []);

    return (
        <div className="App">
            <Header>
                <Container style={{minHeight:'75vh'}}>
                  
                </Container>
            </Header>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <ul>
                    <li key={message}>{message}</li>
                </ul>
            </header>
            */
        </div>
    );
}

export default App;