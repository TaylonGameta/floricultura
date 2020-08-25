import React, {useState} from 'react';
import {Main, FormItem, FormGroup, Footer} from './styles';
import axios from 'axios';



const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const sendRequest = () => {
        axios({
            method: "post",
            url: "https://www.originalflores.com.br:8443/api/v1/accounts/authenticate",
            data:{
                username,
                password
            }
        })
        .then(result=>{
            if(result.data.jwttoken){
                localStorage.setItem("original-flores-token", result.data.jwttoken);
                window.location.hash = "/associados";
            }
            
        })
        .catch(error=>setError("Sem autorização"))
    }

    return(
        <>
            <Main>
                <FormGroup>
                    <h1><span><i className="fa fa-leaf"></i></span>Original Flores</h1>
                    <h2>Login</h2>
                    <FormItem>
                        <label>Username:</label>
                        <input value={username} onChange={e=>setUsername(e.target.value)}></input>
                    </FormItem>
                    <FormItem>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={e=>setPassword(e.target.value)}></input>
                    </FormItem>
                    <button onClick={()=>sendRequest()}>Logar</button>
                    
                    <Footer>
                        <p>{error}</p>
                    </Footer>
                </FormGroup>
               
            </Main>
        </>
    );
}

export default Login;