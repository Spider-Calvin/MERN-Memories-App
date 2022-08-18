import './App.scss';
import { useState , useEffect } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";


import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form.jsx";
import { useDispatch } from 'react-redux';
import { getPosts } from "./Actions/Posts";
import Loader from './Components/Loader/Loader';
import Login from './Components/Login/Login';



const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const [loggedin, setLoggedin] = useState(false);
  const dispatch = useDispatch();
 
  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])

  return (
    <>
      <Routes>
        <Route path="/" element={ <Posts setCurrentId={setCurrentId} loggedin={loggedin} /> } />
        <Route path="/form" element={<Form currentId={currentId} setCurrentId={setCurrentId} />} />
        <Route path="/login" element={<Login setLoggedin={setLoggedin} />} />
        {/* <Loader/> */}
      </Routes>
    </>
  );
};

export default App;