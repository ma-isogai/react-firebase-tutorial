import React, { useRef } from "react";
import { auth } from "../firebase";

function UserInfo() {
  return (
    <div className="text-center">
      <img
        src={auth.currentUser?.photoURL ?? ""}
        className="w-full mb-5"
        alt=""
      />
      <p className="mb-5">{auth.currentUser?.displayName}</p>
    </div>
  );
}

export default UserInfo;
