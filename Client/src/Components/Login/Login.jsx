import React,{useState} from 'react'
import { GiSpiderWeb } from "react-icons/gi";
import './Login.scss'
import { useNavigate } from "react-router-dom";

function Login({setLoggedin}) {
    const [email,setEmail]= useState("")
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    const Login = ()=> {
      if(email==process.env.REACT_APP_EMAIL && password == process.env.REACT_APP_PASSWORD){setLoggedin(true);
      Navigate("/");}
      else{
        alert("Wrong username or password");
      } 
      
    }

  return (
    <>
      <div className="login_container">
        <h1 className="app__tit">
          <GiSpiderWeb />
          &nbsp; Spider Memories
        </h1>
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Email id"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="button" className="p-text" onClick={Login}>
            Login !
          </button>
        </div>
      </div>
    </>
  );
}

export default Login
