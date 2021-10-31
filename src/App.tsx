import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Login from "./pages/Login/Login";
// import NavBar from "./components/NavBar";
import { Register } from "./pages/Register/Register";
// import Register from "./components/Register";
import { Form } from "formik";
import NavBar from "./components/NavBar/NavBar";
import { createBrowserHistory } from "history";
import { NotificationPage } from "./pages/Notification/NotificationPage";

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
    const HomeContainer = () => (
      <div>
        <NavBar />
        <Route path="/" component={Home} />
      </div>
    );

    return (
      <div dir="rtl">
        {/* {loggedin ? <NavBar /> : ""} */}
        <NavBar />
        <Route path="/notification" component={NotificationPage} />
        {/* <Switch>
          <Route exact path="/" component={!loggedin ? Login : HomeContainer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <NavBar />
          <Route path="/home" component={Home} />
          <Route path="/notification" component={NotificationPage} /> */}
        {/*<Route exact path="/login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/profile" component={Profile} /> */}
        {/* </Switch> */}
      </div>
    );
  }
}

export default App;
