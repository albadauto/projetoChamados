import React from 'react'
import './login.css';
import img from '../../assets/img/img.svg';
import { useState } from 'react';
import { api } from '../../api';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {
    const history = useHistory();
    const [login, setLogin] = useState({
        user:"",
        password:""
    });


    const handleOnSubmit = (e) => {
        e.preventDefault();
        api.post("/isValidLogin", login).then((res) => {
            if(res.data.auth){
                sessionStorage.setItem("session", res.data.token);
                history.push("/home");
            }else{
                toast.error(res.data.msg, {theme: 'colored'});
                sessionStorage.setItem("session", null);
            }
            
        });
    }

    return (
        <div className='main-login'>
            <div className='left-login'>
                <h1>Faça login <br /> e entre pro nosso time</h1>
                <img src={img} alt="" className='left-login-img'/>

            </div>
            <form onSubmit={handleOnSubmit} method="post">
            <div className='right-login'>
                <div className="card-login">
                    <h1>LOGIN</h1>
                    <div className='textfield'>
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" name="user" id="" placeholder='Usuário' value={login.user} onChange={(e) => setLogin({...login, user: e.target.value})}/>
                    </div>

                    <div className='textfield'>
                        <label htmlFor="usuario">Senha</label>
                        <input type="password" name="password" id="" placeholder='Senha' value={login.password} onChange={(e) => setLogin({...login, password: e.target.value})}/>
                    </div>
                    <button type="submit" className="btn-login">Login</button>
                </div>
            </div>
            </form>
       </div>
        
    );
}

export default Login;