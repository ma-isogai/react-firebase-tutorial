"use client";

import { signInWithPopup } from "firebase/auth";
import React from "react";

import { auth, provider } from "../firebase";

// Googleでサインイン
function SignInButton() {
  const signInWithGoogle = () => {
    // firebaseを使ってGoogleでサインインする
    signInWithPopup(auth, provider);
  };
  return (
    <div>
      <button
        className="rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white p-2 font-semibold"
        onClick={signInWithGoogle}
      >
        サインイン
      </button>
    </div>
  );
}

export default SignInButton;
