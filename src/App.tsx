import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Follow } from "./pages/Follow/Follow";
import { Register } from "./pages/Register/Register";
import NavBar from "./components/NavBar/NavBar";
import { MessagePage } from "./pages/Message/MessagePage";

interface AppProps {}

interface AppState {}
let loggedin: boolean;

export const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {
  const loginState = sessionStorage.getItem("loginState");
  let condition = false;
  if (loginState === "loggedIn") {
    condition = true;
  } else if (props.path === "/") {
    return <Route path={props.path} exact={props.exact} component={Login} />;
  } else {
    condition = false;
  }

  return condition ? (
    <>
      <NavBar />
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
    </>
  ) : (
    <Route path={props.path} exact={props.exact} component={props.component} />
  );
};

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div dir="rtl" className="bg-backGroundColor">
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/message" component={MessagePage} />
          <PrivateRoute exact path="/follow" component={Follow} />

          {/*
            <Route exact path="/profile" component={Profile} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
