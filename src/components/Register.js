import React from "react";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();

  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  async function submitHandler(event) {
    event.preventDefault();
    try {
      const response = await fetch("https://reqres.in/api/register", {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const errorStatus = response.status;
        const data = await response.json();
        throw new Error(`${errorStatus} ${data.error}`);
      }
      const data = await response.json();
      console.log(data);
      history.push("/reactjs-system-task/login");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <h1>Register</h1>
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input
          className="text-input"
          type="email"
          id="email"
          ref={emailRef}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          className="text-input"
          type="password"
          id="password"
          ref={passwordRef}
        />
        <button>Register</button>
      </form>
    </>
  );
}

export default Register;
