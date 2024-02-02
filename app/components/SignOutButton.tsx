import React from "react";

import { auth } from "../firebase";

// Googleでサインインアウト
function SignOutButton() {
  return (
    <div>
      <button
        className="rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white p-2 font-semibold"
        onClick={() => auth.signOut()}
      >
        サインアウト
      </button>
    </div>
  );
}

export default SignOutButton;
