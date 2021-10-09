import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from './components/Login';


interface AppProps {
  
}
 
interface AppState {
  
  
}
 
class App extends React.Component<AppProps, AppState> {
 
  
  render() { 
    return ( 
      <div className="container mt-3">
        <Switch>
          
          <Route exact path="/login" component={Login} />
            {/* <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} /> */}
            
          </Switch>
        </div>

     );
  }
}
 
export default App;