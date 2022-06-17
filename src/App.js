import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux"
import { userAction } from './redux/actions/userAction';
import './App.css';
import { User } from './components/User';

function App() {
  const dispatch = useDispatch()
  const userList = useSelector(state=>state.userList)
  const {loading,users,error} =userList
useEffect(()=>{
  dispatch(userAction());
},[dispatch])
  return (
    <div className="App">
      <h1>Redux Demo </h1>
      {loading?<h2>loading...</h2> :error?<h2>{error}</h2>:
      <User users ={users}/>
    }
    </div>
  );
}

export default App;
