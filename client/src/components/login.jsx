import React from 'react';
import axios from 'axios'

function Login() {

    let loginAPI = () =>{
        let response = axios.get("http://localhost:8081/test")
        .then((res)=>{
            console.log(res);
        })
    }

  loginAPI()
  return (
    <div>Login</div>
  )
}

export default Login