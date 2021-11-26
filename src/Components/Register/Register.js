import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';

const Register = () => {
    const { handleUserRegister } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const register = () => {
        console.log("hello");
        handleUserRegister(name, email, password);
    };

    return (
        <div className="main">
            <div className="sub-main">
                <div className="mt-5">
                    <h1>Register Now</h1>
                    <div className="input-group input-group-sm mb-3">
                        <input onChange={handleName} type="text" className="form-control box" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="your name" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <input onChange={handleEmail} type="email" className="form-control box" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="your email" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <input onChange={handlePassword} type="password" className="form-control box" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="your password" />
                    </div>
                    <button onClick={register} className="log-button">Register</button>

                    <p className="link">You Have a Account?<a href="/login"> Sing Up</a></p>


                </div>

            </div>
        </div >
    );
};

export default Register;