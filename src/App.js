import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Main from './components/main/Main';

import 'bootstrap/dist/css/bootstrap.min.css';


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
        <Main></Main>
      </div>
  );
}

export default App;
