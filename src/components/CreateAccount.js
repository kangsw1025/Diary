import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authService } from "../firebase";

function CreateAccount({ onToggleState }) {
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

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const data = await createUserWithEmailAndPassword(
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
    <>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={onChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={onChange}
          required
        />
        <input type="submit" value="createAccount" />
      </form>
      <div>
        <button onClick={onToggleState}>Login</button>
      </div>
    </>
  );
}

export default CreateAccount;
