import React from "react";
import { Switch, Route } from "react-router-dom";
import {Home} from "./page/Home/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div dir="rtl" className="bg-gray-100">
         <NavBar></NavBar>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path={["/register"]} component={Register} />
          {/*<Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
