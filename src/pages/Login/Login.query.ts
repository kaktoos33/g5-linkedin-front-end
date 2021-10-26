import { gql } from "apollo-boost";
import { FC } from "react";
import { useMutation } from "react-apollo";
import { useHistory } from "react-router-dom";

interface QueryProps {
  email: string;
  password: string;
}
const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(loginRequest: { email: $email, password: $password }) {
      accessToken
      refreshToken
    }
  }
`;

export const LoginQuery = (props: QueryProps) => {
  const history = useHistory();

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: props.email,
      password: props.password,
    },
    onCompleted: ({ login }) => {
      sessionStorage.setItem("accessTtoken", login.accessToken);
      sessionStorage.setItem("refreshToken", login.refreshToken);
      sessionStorage.setItem("loginState", "loggedIn");
      history.push("/home");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
};
