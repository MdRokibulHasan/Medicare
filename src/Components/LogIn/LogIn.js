import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import './Login.css';
import useAuth from '../../Hooks/useAuth';


const LogIn = () => {
    const { singInWithGoogle, singInWithGithub, user, logOut, handleUserLogin } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = () => {
        handleUserLogin(email, password);
    };


    return (
        <div className="main">
            <div className="sub-main">
                <div className="mt-5">
                    <h1>Login</h1>
                    <div class="input-group input-group-sm mb-3">
                        <input onChange={handleEmail} type="text" class="form-control box" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="your email" />
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <input onChange={handlePassword} type="password" class="form-control box" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="your password" />
                    </div>
                    <Button onClick={handleLogin} className="log-button">Log In</Button>
                    <p className="link">
                        <a href="#">Forget Password</a></p>
                    <p><a href="/register">Sing Up</a></p>
                    <div>
                        <button onClick={singInWithGoogle}
                            className="link-button">Google Sing IN</button>
                        <button onClick={singInWithGithub} className="link-button">GitHub Sing IN</button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default LogIn;