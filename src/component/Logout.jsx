import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Logout() {
  const { logout } = useAuth0();
  // const logoutWithRedirect = () => {
  //   logout({
  //     // returnTo: window.location.origin
  //   })

  return (
    <div className="buttons">
      <button
        className="btn btn-outline-dark ms-2"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
