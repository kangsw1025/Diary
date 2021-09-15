import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { authService } from "../firebase";
import CreateAccount from "../components/CreateAccount";

function Auth() {
  const [createAccount, setCreateAccount] = useState(false);
  const onSocialClick = async e => {
    const { name } = e.target;
    var provider;

    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    await signInWithPopup(authService, provider);
  };

  const onToggleState = () => {
    setCreateAccount(createAccount => !createAccount);
  };

  return (
    <>
      {createAccount ? (
        <CreateAccount onToggleState={onToggleState} />
      ) : (
        <>
          <AuthForm />
          <div>
            <button onClick={onToggleState}>CreateAccount</button>
            <button onClick={onSocialClick} name="google">
              Login With Google
            </button>
            <button onClick={onSocialClick} name="github">
              Login With Github
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Auth;
