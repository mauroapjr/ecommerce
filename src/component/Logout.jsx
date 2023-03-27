import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Logout() {
  const { user, logout } = useAuth0();
  const logoutWithRedirect = () => {
    logout({
      returnTo: window.location.origin
    })
  }

  return (
    <div className="buttons">
      <a className="btn btn-outline-dark ms-2">
        <i
          className="fa fa-sign-out"
          onClick={() => logoutWithRedirect({
            returnTo: window.location.origin
          })}
          aria-hidden="true"
        ></i>{" "}
        Logout
      </a>
      {/* <button onClick={() => loginWithRedirect()}>Login</button> */}

      {/* <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button> */}
    </div>
  );
}

export default Logout;
