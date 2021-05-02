import React, { useState } from "react";
import { authService, firebaseInstance } from "../firebase";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState(false);
  const provider = new firebaseInstance.auth.GoogleAuthProvider();

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
    setError("");
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      if (newAccount) {
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  const onGoogleLogin = async () => {
    await authService.signInWithPopup(provider).then((result) => {
      console.log(result.user);
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />

        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
        {error}
      </form>
      <button onClick={onGoogleLogin}>Google Login</button>
      <span onClick={toggleAccount}>
        {newAccount ? "Log in" : "Create Account"}
      </span>
    </div>
  );
};
export default Auth;
