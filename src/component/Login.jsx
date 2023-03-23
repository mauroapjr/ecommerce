import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Login(props) {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
    {/* <Navbar user={user} /> */}
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          value={user}
          type="username"
          id="username"
          name="username"
          onChange={(e) => setUser(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          value={pwd}
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPwd(e.target.value)}
        />
        <button className="btn btn-dark px-4 py-2 mt-4">
          Login
        </button>
      </form>
      <p>Don't have an account? Register here:</p>
      <Link to="/signup" className="btn btn-dark px-4 py-2 mt-2" >
            Signup
      </Link>
      
    </>
  );
}






















// import { useRef, useState, useEffect } from 'react';
// import useAuth from '../hooks/useAuth';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import useInput from '../hooks/useInput';
// import useToggle from '../hooks/useToggle';

// import axios from '../api/axios';
// const LOGIN_URL = '/auth';

// const Login = () => {
//     const { setAuth } = useAuth();

//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/";

//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, resetUser, userAttribs] = useInput('user', '')
//     const [pwd, setPwd] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const [check, toggleCheck] = useToggle('persist', false);

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd])

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post(LOGIN_URL,
//                 JSON.stringify({ user, pwd }),
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                     withCredentials: true
//                 }
//             );
//             const accessToken = response?.data?.accessToken;
//             const roles = response?.data?.roles;
//             setAuth({ user, pwd, roles, accessToken });
//             resetUser();
//             setPwd('');
//             navigate(from, { replace: true });
//         } catch (err) {
//             if (!err?.response) {
//                 setErrMsg('No Server Response');
//             } else if (err.response?.status === 400) {
//                 setErrMsg('Missing Username or Password');
//             } else if (err.response?.status === 401) {
//                 setErrMsg('Unauthorized');
//             } else {
//                 setErrMsg('Login Failed');
//             }
//             errRef.current.focus();
//         }
//     }

//     return (

//         <section>
//             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//             <h1>Sign In</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username:</label>
//                 <input
//                     type="text"
//                     id="username"
//                     ref={userRef}
//                     autoComplete="off"
//                     {...userAttribs}
//                     required
//                 />

//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     onChange={(e) => setPwd(e.target.value)}
//                     value={pwd}
//                     required
//                 />
//                 <button>Sign In</button>
//                 <div className="persistCheck">
//                     <input
//                         type="checkbox"
//                         id="persist"
//                         onChange={toggleCheck}
//                         checked={check}
//                     />
//                     <label htmlFor="persist">Trust This Device</label>
//                 </div>
//             </form>
//             <p>
//                 Need an Account?<br />
//                 <span className="line">
//                     <Link to="/register">Sign Up</Link>
//                 </span>
//             </p>
//         </section>

//     )
// }

// export default Login


