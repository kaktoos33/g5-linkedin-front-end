import { gql } from 'apollo-boost';
import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { useMutation } from 'react-apollo';
import { AUTH_TOKEN } from './constants';
import LoginContainer from './LoginContainer';
import { useHistory } from 'react-router-dom';


const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $email: String!
    $password: String!
  ) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

interface LoginProps {
    
}
 
const Login: FunctionComponent<LoginProps> = () => {

    const history = useHistory();
    
    const [formState, setFormState] = useState({
        login: true,
        email: '',
        password: '',
        username: ''
      });

      const onChange = ()=>{

      }
    
    const onSubmit = ()=>{
        login();        
    }
    const [login] = useMutation(LOGIN_MUTATION, {
        variables: {
          email: formState.email,
          password: formState.password
        },
        onCompleted: ({ login }) => {
          localStorage.setItem(AUTH_TOKEN, login.token);
          history.push('/');
        },
        onError: (error)=>{
            console.log(error.message);
            
        }
        
      });
    return ( 
        <div>
                <LoginContainer formState={formState} setFormState={setFormState} onSubmit={onSubmit}/>
        </div>
     );
}
 
export default Login;