import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  // message 초기값을 ""으로 설정.
  const [message, setMessage] = useState("");
  // useEffect(함수,배열) : 컴포넌트가 화면에 나타났을(마운트)때 자동 실행.
  useEffect( () => {

    // fetch(url,options) : HTTP 요청 함수
    fetch('/hello')
        .then(response => response.text())
        .then(message => {
          setMessage(message);
        });
  },[])

  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{message}</h1>
          <p>
            메시지 출력
          </p>
        </header>
      </div>
  );
}

export default App;
