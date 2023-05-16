import React from 'react';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';

const Header = () => {

    let navigate = useNavigate();

    const logoutHandler = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_BASE_URL}/logout`,
        }).then((response) => {
            localStorage.removeItem("lymtoken");
            navigate("/login");
        }).catch((error) => {
            console.log(error.response.data.message);
        });
    };

    return (
        <ul className="nav justify-content-end p-3  mb-5 border-bottom">
            <li className="nav-item">
                {localStorage.getItem("lymtoken") && <Link className="btn btn-danger" to="/login" onClick={(e) => logoutHandler(e)}>Logout</Link>}
            </li>
        </ul>
    )
}

export default Header;