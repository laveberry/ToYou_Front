import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App() {
  
  let [message, setMessage] = useState("");
  const sburl = "http://localhost:8080";
  axios.get(sburl+"/hello").then(res=>{
    console.log(res.data);
    setMessage(res.data);
  },[]);

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
