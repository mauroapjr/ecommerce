import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="buttons">
      <button
        className="btn btn-outline-dark ms-2"
        onClick={() => loginWithRedirect()}
      >
        {" "}
        Login
      </button>
    </div>
  );
}

export default Login;

