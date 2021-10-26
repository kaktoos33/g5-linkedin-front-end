import React from "react";
import { Switch, Route } from "react-router-dom";
import {Home} from "./pages/Home/Home";
import Login from "./components/Login";
// import NavBar from "./components/NavBar";
import {Register} from "./pages/Register/Register";
// import Register from "./components/Register";
import NavBar from "./components/NavBar";

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div dir="rtl" className="">
        {/*<NavBar></NavBar>*/}
      {/* <div dir="rtl" className="bg-gray-100">
         <NavBar></NavBar> */}
        <Switch>
          <Route exact path="/home" component={Home} />
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
