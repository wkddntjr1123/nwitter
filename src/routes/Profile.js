import React from "react";
import { authService } from "../firebase";

const onLogout = () => {
  authService.signOut();
};

const Profile = () => (
  <>
    <button onClick={onLogout}>Log Out</button>
  </>
);
export default Profile;
