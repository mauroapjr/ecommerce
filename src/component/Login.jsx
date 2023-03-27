import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect()}>Login</button>
  )
} 

export default Login;
// import { useRef, useEffect, useState } from "react";
// import {
//   faCheck,
//   faTimes,
//   faInfoCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import React from "react";
// import "../Login.css" 


// function Login() {

//   const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
//   const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
//   const REGISTER_URL = "/products";

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


//   const handleSubmit = async (e) => {};

//   return (
//     <section>
//       <p
//         ref={errRef}
//         className={errMsg ? "errmsg" : "offscreen"}
//         aria-live="assertive"
//       >
//         {errMsg}
//       </p>

//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">
//           Username:{" "}
//           {validName ? (
//             <FontAwesomeIcon
//               icon={faCheck}
//               className="valid"
//               style={{ color: "limegreen" }}
//             />
//           ) : (
//             <FontAwesomeIcon
//               icon={faTimes}
//               className="invalid"
//               style={{ color: "red" }}
//             />
//           )}
//         </label>
//         <input
//           type="text"
//           id="username"
//           ref={userRef}
//           autoComplete="off"
//           onChange={(e) => setUser(e.target.value)}
//           value={user}
//           required
//           aria-invalid={validName ? "false" : "true"}
//           aria-describedby="uidnote"
//           onFocus={() => setUserFocus(true)}
//           onBlur={() => setUserFocus(false)}
//         />

//         <p
//           id="uidnote"
//           className={
//             userFocus && user && !validName ? "instructions" : "offscreen"
//           }
//         >
//           <FontAwesomeIcon icon={faInfoCircle} /> 4 to 24 characters.
//           <br />
//           Must begin with a letter.
//           <br />
//           Letters, numbers, underscores, hyphens allowed.
//         </p>

//         <label htmlFor="password">
//           Password:{" "}
//           {validPwd ? (
//             <FontAwesomeIcon
//               icon={faCheck}
//               className="valid"
//               style={{ color: "limegreen" }}
//             />
//           ) : (
//             <FontAwesomeIcon
//               icon={faTimes}
//               className="invalid"
//               style={{ color: "red" }}
//             />
//           )}
//         </label>
//         <input
//           type="password"
//           id="password"
//           onChange={(e) => setPwd(e.target.value)}
//           value={pwd}
//           required
//           aria-invalid={validPwd ? "false" : "true"}
//           aria-describedby="pwdnote"
//           onFocus={() => setPwdFocus(true)}
//           onBlur={() => setPwdFocus(false)}
//         />
//         <p
//           id="pwdnote"
//           className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
//         >
//           <FontAwesomeIcon icon={faInfoCircle} /> 8 to 24 characters.
//           <br />
//           Must include uppercase and lowercase letters, a number and a special
//           character.
//           <br />
//           Allowed special characters:{" "}
//           <span aria-label="exclamation mark">!</span>{" "}
//           <span aria-label="at symbol">@</span>{" "}
//           <span aria-label="hashtag">#</span>{" "}
//           <span aria-label="dollar sign">$</span>{" "}
//           <span aria-label="percent">%</span>
//         </p>
//         <p
//           id="confirmnote"
//           className={matchFocus && !validMatch ? "instructions" : "offscreen"}
//         >
//           <FontAwesomeIcon icon={faInfoCircle} /> Must match the first password
//           input field.
//         </p>

//         <button
//           disabled={!validName || !validPwd || !validMatch ? true : false}
//         >
//           Login
//         </button>
//       </form>
//     </section>
//   );
// }

// export default Login;
