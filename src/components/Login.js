import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authService } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = e => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const data = await signInWithEmailAndPassword(
        authService,
        email,
        password
      );
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-form">
        <div className="email">
          <div className="input-icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <input
            name="email"
            type="email"
            className="authInput"
            placeholder="Email"
            onChange={onChange}
            required
            autoComplete="off"
          />
        </div>
        <div className="password">
          <div className="input-icon">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <input
            name="password"
            type="password"
            className="authInput"
            placeholder="Password"
            onChange={onChange}
            minLength="8"
            maxLength="16"
            required
          />
        </div>
        <button className="authBtn">Sign In</button>
      </div>
    </form>
  );
}

export default AuthForm;
