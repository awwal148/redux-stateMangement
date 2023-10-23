import { useState } from "react"; 
import { login, logout } from "../Store";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const [newUserName, setNewUserName] = useState("");
   const dispatch = useDispatch();
   const username = useSelector((state) => state.user.value.username);
  return (
    <h1>
        THIS IS THE LOGIN PAGE
        <input type="text" onChange={(event) => setNewUserName(event.target.value)} />
        <button onClick={() => dispatch(login({ username: newUserName}))}> Submit Login </button>
        <button onClick={}> Logout </button>
    </h1>
  )
}
