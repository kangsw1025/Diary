import React, { useCallback, useEffect, useState } from "react";
import Login from "../components/Login";
import CreateAccount from "../components/CreateAccount";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { authService } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

function Auth() {
  const [createAccount, setCreateAccount] = useState(false);

  const onSocialClick = useCallback(async e => {
    const { name } = e.target;
    console.log(e.target);
    var provider;

    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    await signInWithPopup(authService, provider);
  }, []);

  const onClick = useCallback(
    e => {
      const name = e.target.className.split(" ")[0];

      if (name === "sign-in") {
        if (createAccount === false) return;
        setCreateAccount(false);
      } else if (name === "sign-up") {
        if (createAccount === true) return;
        setCreateAccount(true);
      }

      const menuTap = document.querySelector(".menu-tap");

      Array.from(menuTap.children).forEach(child =>
        child.classList.remove("selected")
      );

      e.target.classList.add("selected");
    },
    [createAccount]
  );

  useEffect(() => {
    const signIn = document.querySelector(".sign-in");
    signIn.classList.add("selected");
  }, []);

  return (
    <div className="wrap">
      <div className="auth-container">
        <div className="title">D i a r y</div>
        <div className="menu-tap">
          <div className="sign-in menu" onClick={onClick}>
            SIGN IN
          </div>
          <div className="sign-up menu" onClick={onClick}>
            SIGN UP
          </div>
        </div>
        <div className="form-container">
          {createAccount ? <CreateAccount /> : <Login />}
          <div className="social-form">
            or you can sign in with
            <div className="social-icons">
              <button
                className="social-icon"
                onClick={onSocialClick}
                name="google"
              >
                <FontAwesomeIcon icon={faGoogle} onClick={() => {}} />
              </button>
              <button
                className="social-icon"
                onClick={onSocialClick}
                name="github"
              >
                <FontAwesomeIcon icon={faGithub} onClick={() => {}} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Auth);
