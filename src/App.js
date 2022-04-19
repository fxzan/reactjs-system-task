import Register from "./components/Register";
import Login from "./components/Login";
import UserList from "./components/UserList";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <main className="main">
      <Switch>
        <Route path="/reactjs-system-task/" exact>
          <Register />
        </Route>
        <Route path="/reactjs-system-task/register">
          <Register />
        </Route>
        <Route path="/reactjs-system-task/login">
          <Login />
        </Route>
        <Route path="/reactjs-system-task/user-list">
          <UserList />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
