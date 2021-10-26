import React from "react";
import { Switch, Route } from "react-router-dom";
import {Home} from "./pages/Home/Home";
import Login from "./pages/Login/Login";
// import NavBar from "./components/NavBar";
import { Register } from "./pages/Register/Register";
// import Register from "./components/Register";
import { Form } from "formik";
import NavBar from "./components/NavBar/NavBar";

interface AppProps {}

interface AppState {}
let loggedin: boolean;

class App extends React.Component<AppProps, AppState> {
  render() {
    const loginState = sessionStorage.getItem("loginState");
    if (loginState === "loggedIn") {
      loggedin = true;
    } else {
      loggedin = false;
    }
    console.log(loggedin);

    return (
      <div dir="rtl" className="bg-primary">
        {/* {loggedin ? <NavBar /> : ""} */}
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

          <Route exact path="/home" component={Home} />
          {/*<Route exact path="/login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/profile" component={Profile} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
