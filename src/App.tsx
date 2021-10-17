import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';


interface AppProps {

}

interface AppState {

}

class App extends React.Component<AppProps, AppState> {

  render() {
    return (
      <div dir="rtl" className="">
        <Switch>

          <Route exact path="/login" component={Login} />
          <Route exact path={["/register"]} component={Register} />
          <Route exact path={["/home"]} component={Home}>
            <Home />
          </Route>
        </Switch>
      </div>

    );
  }
}

export default App;