import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

export default function Signup(props) {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert("alert");

    const endpoint = "http://localhost:8080/signup";

    try {
      const response = await axios.post(
        endpoint,
        {
          user: user,
          password: pwd,
        }        
      );

      console.log("response.data++++++++++++", response.data);
    } catch (error) {
      console.error("---------------", error);
    }
  };

  return (
    <>
      
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

        <button type="submit" onSubmit={handleSubmit} className="btn btn-dark px-4 py-2 mt-4">
          Signup
        </button >
      </form>
      <p>Already have an account? Login here:</p>

      <Link to={"/login"} className="btn btn-dark px-4 py-2 mt-4">
        Login
      </Link>

      {user ? (
        <React.Fragment>
          <form action="/">
            <button>Logout</button>
          </form>
        </React.Fragment>
      ) : (
        <a className="btn btn-dark px-4 py-2 mt-2" href="/signup">
          Register
        </a>
      )}
    </>
  );
}
































// import { useRef, useEffect, useState } from "react";
// import {
//   faCheck,
//   faTimes,
//   faInfoCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import React from "react";
// import axios from "axios";

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = "/signup";

// const Signup = () => {
//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState("");
//   const [validName, setValidName] = useState(false);
//   const [userFocus, setUserFocus] = useState(false);

//   const [pwd, setPwd] = useState("");
//   const [validPwd, setValidPwd] = useState(false);
//   const [pwdFocus, setPwdFocus] = useState(false);

//   const [matchPwd, setMatchPwd] = useState("");
//   const [validMatch, setValidMatch] = useState(false);
//   const [matchFocus, setMatchFocus] = useState(false);

//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useEffect(() => {
//     const result = USER_REGEX.test(user);
//     console.log("RESULT FROM USER", result);
//     console.log("USER", user);
//     setValidName(result);
//   }, [user]);

//   useEffect(() => {
//     const result = PWD_REGEX.test(pwd);
//     console.log("RESULT FROM PWD", result);
//     console.log("PWD", pwd);
//     setValidPwd(result);
//     const match = pwd === matchPwd;
//     setValidMatch(match);
//   }, [pwd, matchPwd]);

//   useEffect(() => {
//     setErrMsg("");
//   }, [user, pwd, matchPwd]);

//   console.log("VALID NAME", validName);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // if button enabled with JS hack
//     const v1 = USER_REGEX.test(user);
//     const v2 = PWD_REGEX.test(pwd);
//     if (!v1 || !v2) {
//       setErrMsg("Invalid Entry");
//       return;
//     }

//     console.log(user, pwd);
//     setSuccess(true);

//     try {
//       const response = await axios.post(
//         REGISTER_URL,
//         JSON.stringify({ user, pwd }),
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       );
//       console.log(response?.data);
//       console.log(response?.accessToken);
//       console.log(JSON.stringify(response?.data));
//       setSuccess(true);
//       //clear state and controlled inputs
//       //need value attrib on inputs for this
//       setUser("");
//       setPwd("");
//       setMatchPwd("");
//     } catch (err) {
//       if (!err?.response) {
//         setErrMsg("No Server Response");
//       } else if (err.response?.status === 409) {
//         setErrMsg("Username Taken");
//       } else {
//         setErrMsg("Registration Failed");
//       }
//       errRef.current.focus();
//     }
//   };

//   return (
//     <>
//       {success ? (
//         <section>
//           <h1>Success!!</h1>
//           <p>
//             <a href="/">SIGN IN</a>
//           </p>
//         </section>
//       ) : (
//         <section>
//           <p
//             ref={errRef}
//             className={errMsg ? "errmsg" : "offscreen"}
//             aria-live="assertive"
//           >
//             {errMsg}
//           </p>

//           <h1>Signup</h1>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="username">
//               Username:{" "}
//               {validName ? (
//                 <FontAwesomeIcon
//                   icon={faCheck}
//                   className="valid"
//                   style={{ color: "limegreen" }}
//                 />
//               ) : (
//                 <FontAwesomeIcon
//                   icon={faTimes}
//                   className="invalid"
//                   style={{ color: "red" }}
//                 />
//               )}
//             </label>
//             <input
//               type="text"
//               id="username"
//               ref={userRef}
//               autoComplete="off"
//               onChange={(e) => setUser(e.target.value)}
//               value={user}
//               required
//               aria-invalid={validName ? "false" : "true"}
//               aria-describedby="uidnote"
//               onFocus={() => setUserFocus(true)}
//               onBlur={() => setUserFocus(false)}
//             />

//             <p
//               id="uidnote"
//               className={
//                 userFocus && user && !validName ? "instructions" : "offscreen"
//               }
//             >
//               <FontAwesomeIcon icon={faInfoCircle} /> 4 to 24 characters.
//               <br />
//               Must begin with a letter.
//               <br />
//               Letters, numbers, underscores, hyphens allowed.
//             </p>

//             <label htmlFor="password">
//               Password:{" "}
//               {validPwd ? (
//                 <FontAwesomeIcon
//                   icon={faCheck}
//                   className="valid"
//                   style={{ color: "limegreen" }}
//                 />
//               ) : (
//                 <FontAwesomeIcon
//                   icon={faTimes}
//                   className="invalid"
//                   style={{ color: "red" }}
//                 />
//               )}
//             </label>
//             <input
//               type="password"
//               id="password"
//               onChange={(e) => setPwd(e.target.value)}
//               value={pwd}
//               required
//               aria-invalid={validPwd ? "false" : "true"}
//               aria-describedby="pwdnote"
//               onFocus={() => setPwdFocus(true)}
//               onBlur={() => setPwdFocus(false)}
//             />
//             <p
//               id="pwdnote"
//               className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
//             >
//               <FontAwesomeIcon icon={faInfoCircle} /> 8 to 24 characters.
//               <br />
//               Must include uppercase and lowercase letters, a number and a
//               special character.
//               <br />
//               Allowed special characters:{" "}
//               <span aria-label="exclamation mark">!</span>{" "}
//               <span aria-label="at symbol">@</span>{" "}
//               <span aria-label="hashtag">#</span>{" "}
//               <span aria-label="dollar sign">$</span>{" "}
//               <span aria-label="percent">%</span>
//             </p>

//             <label htmlFor="confirm_pwd">
//               Confirm Password:{" "}
//               {validMatch && matchPwd ? (
//                 <FontAwesomeIcon
//                   icon={faCheck}
//                   className="valid"
//                   style={{ color: "limegreen" }}
//                 />
//               ) : (
//                 <FontAwesomeIcon
//                   icon={faTimes}
//                   className="invalid"
//                   style={{ color: "red" }}
//                 />
//               )}
//             </label>
//             <input
//               type="password"
//               id="confirm_pwd"
//               onChange={(e) => setMatchPwd(e.target.value)}
//               value={matchPwd}
//               required
//               aria-invalid={validMatch ? "false" : "true"}
//               aria-describedby="confirmnote"
//               onFocus={() => setMatchFocus(true)}
//               onBlur={() => setMatchFocus(false)}
//             />
//             <p
//               id="confirmnote"
//               className={
//                 matchFocus && !validMatch ? "instructions" : "offscreen"
//               }
//             >
//               <FontAwesomeIcon icon={faInfoCircle} /> Must match the first
//               password input field.
//             </p>

//             <button
//               disabled={!validName || !validPwd || !validMatch ? true : false} to="/"
//             >
//               Signup
//             </button>
//           </form>
//           <p>
//             Already registered?
//             <br />
//             <span className="line">
//               {/* {"/login"} */}
//               <Link to="/login">SignIn</Link>
//             </span>
//           </p>
//         </section>
//       )}
//     </>
//   );
// };

// export default Signup;

////////////////////////////////////////////////////////////////////////////////////////////
