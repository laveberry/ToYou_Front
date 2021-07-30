import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import {Header} from "./components/include/Header";
import Footer from "./components/include/Footer";

function App() {
  //[변수, 변수재정의] = useState("초기값")
  let [message, setMessage] = useState("");
  const sburl = "http://localhost:8080";
  axios.get(sburl+"/hello").then(res=>{
    console.log(res.data);
    setMessage(res.data);
  },[]);

  return (
      <div className="App">
        <Header></Header>
        <header className="App-header">
          <h1 className="App-title">{message}</h1>
          <p>
            메시지 출력
          </p>
        </header>
        <Footer></Footer>
      </div>
  );
}

export default App;
