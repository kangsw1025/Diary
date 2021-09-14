import React from "react";
import AuthForm from "../components/AuthForm";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

function Auth() {
  const onSocialClick = async e => {
    const { name } = e.target;
    var provider;

    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    await signInWithPopup(getAuth(), provider);
  };

  return (
    <>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">
          Login With Google
        </button>
        <button onClick={onSocialClick} name="github">
          Login With Github
        </button>
      </div>
    </>
  );
}

export default Auth;
