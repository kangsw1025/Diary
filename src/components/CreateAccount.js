import React, { useCallback, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { authService } from "../firebase";

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = e => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = useCallback(
    async e => {
      e.preventDefault();

      try {
        const data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
        console.log(data);
      } catch (e) {
        alert("이미 가입된 이메일입니다");
      }
    },
    [email, password]
  );

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
            autoComplete="off"
            required
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
            minLength="8"
            maxLength="16"
            onChange={onChange}
            required
          />
        </div>
        <button className="authBtn">Sign Up</button>
      </div>
    </form>
  );
}

export default React.memo(CreateAccount);
