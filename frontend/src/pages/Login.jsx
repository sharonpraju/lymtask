import React from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [error, setError] = React.useState();

    let navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        setError(null);
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_BASE_URL}/login`,
            data: {
                email: email,
                password: password
            }
        }).then((response) => {
            localStorage.setItem("lymtoken", response.data.data);
            navigate("/");
        }).catch((error) => {
            setError(error.response.data.message);
        });
    }

    return (
        <div className='container h-100'>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='border rounded p-5 mt-5'>
                    <h3>Login</h3>
                    <form className="mt-4" onSubmit={(e) => login(e)}>
                        <div className='form-group text-start'>
                            <label>Email</label>
                            <input className='form-control' type='email' onChange={(e) => setEmail(e.target.value)} placeholder="Email" required></input>
                        </div>
                        <div className='form-group text-start mt-3'>
                            <label>Password</label>
                            <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder="Password" required></input>
                        </div>
                        {error && <span className='mt-3 text-danger'>{error}</span>}
                        <div className='form-group mt-3'>
                            <input className='btn btn-primary col-12' type='submit' value='Login'></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login