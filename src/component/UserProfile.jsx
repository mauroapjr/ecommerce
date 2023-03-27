import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function UserProfile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log("USER", user);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("USER", user);
  return (
    isAuthenticated && (
      <div className="ml-1">
        <img
          src={user.picture}
          alt={user.name}
          style={{ borderRadius: "50%", width: "50px", height: "50px" }}
        />
        <h6>{user.name.substring(0, 6)}</h6>
      </div>
    )
  );
}

export default UserProfile;
