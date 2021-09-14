import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChange = e => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const onSubmit = async e => {
    e.preventDefault();

    try {
      let data;
      data = await signInWithEmailAndPassword(getAuth(), email, password);
    } catch (e) {
      setError(e);
      console.error(error);
    }
  };

  return (
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
      <input type="submit" value="Login" />
    </form>
  );
}

export default AuthForm;
