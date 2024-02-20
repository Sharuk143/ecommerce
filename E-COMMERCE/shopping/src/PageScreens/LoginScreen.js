import React, { useContext, useEffect, useState } from 'react';
import "./BlockStyle.css";
import axios from 'axios';
import { Logininfo } from '../App';
const LoginScreen = () => {
    const [UserInput, setUserInput] = useState({
        email: "",
        password: ""
    });
    const [DataAuthentication, setDataAuthentication] = useState([]);
    const [loginSuccess, setLoginSuccess] = useState(null);
    const logininfo = useContext(Logininfo)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setDataAuthentication(response.data))
            .catch(err => console.log(err));
    }, []);

    const InputHandler = (event) => {
        setUserInput({
            ...UserInput,
            [event.target.name]: event.target.value
        });
    }
    const SubmitHandler = (event) => {
        event.preventDefault();
        const user = DataAuthentication.find((userData) => {
            return userData.email === UserInput.email && userData.username === UserInput.password;
        });
        if (user) {
            setLoginSuccess(true);
            logininfo.loginUser()
        } else {

            setLoginSuccess(false);
        }

        setUserInput({
            username: "",
            password: ""
        });
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Login Page</h1>
            <div className='registerBlock'>
                <form className='form' onSubmit={SubmitHandler}>
                    <label>Email</label>
                    <input type="email" value={UserInput.email} onChange={InputHandler} name='email' />
                    <label>Password</label>
                    <input type="password" value={UserInput.password} onChange={InputHandler} name='password' />
                    <input type="submit" value="Login" style={{ backgroundColor: "red", color: "white" }} />
                    {loginSuccess !== null && <p>{loginSuccess ? "Login Successfully" : "Username or password is invalid"}</p>}
                </form>
            </div>
        </>
    )
}

export default LoginScreen;


