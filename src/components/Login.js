import React from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";

function Login() {
  const history = useHistory();
  const authCtx = React.useContext(AuthContext);
  const [isRemember, setRemember] = React.useState(false);

  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  function rememberHandler(event) {
    console.log(event.target.value);
    setRemember((prev) => !prev);
  }

  async function submitHandler(event) {
    event.preventDefault();
    try {
      const response = await fetch("https://reqres.in/api/login", {
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
      if (isRemember) {
        authCtx.login(data.token);
      }
      history.push("/reactjs-system-task/user-list");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <h1>Login</h1>
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
        <div className="remember-buttons">
          <input
            type="radio"
            id="remember"
            htmlFor="rememberMe"
            value="true"
            checked={isRemember}
            onChange={rememberHandler}
          />
          <label htmlFor="remember">Remember Me</label><br/>
          <input
            type="radio"
            id="not-remember"
            htmlFor="rememberMe"
            value="false"
            checked={!isRemember}
            onChange={rememberHandler}
          />
          <label htmlFor="remember">Don't Remember Me</label>
        </div>
        <button>Login</button>
      </form>
    </>
  );
}

export default Login;
