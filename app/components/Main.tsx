"use client";

import React from "react";
import SignInButton from "./SignInButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import UserInfo from "./UserInfo";
import SignOutButton from "./SignOutButton";

function Main() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? (
        <div>
          <UserInfo />
          <SignOutButton />
        </div>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}

export default Main;
