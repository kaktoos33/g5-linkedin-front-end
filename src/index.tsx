import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApolloClient from 'apollo-boost';
<<<<<<< HEAD
import {ApolloProvider} from 'react-apollo';
<<<<<<< HEAD
import './fonts/Iranian_Sans.ttf'
//import { start } from 'repl';
=======
// import './fonts/IRANSans.ttf';
// import { start } from 'repl';
>>>>>>> d9759584644e94799cbb8d088048f5fc45932343
=======
import { ApolloProvider } from 'react-apollo';
import './fonts/Iranian_Sans.ttf'
>>>>>>> feature/create-post

const client = new ApolloClient({ uri: 'http://localhost:8080/auth' });

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
