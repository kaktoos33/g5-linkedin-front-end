import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./pages/Login/Login.form";
// import NavBar from "./components/NavBar";
import { Register } from "./pages/Register/Register";
// import Register from "./components/Register";
import { Form } from "formik";

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div dir="rtl">
        {/*<NavBar></NavBar>*/}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path={["/Register"]} component={Register} />
          {/*<Route exact path="/login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/profile" component={Profile} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
