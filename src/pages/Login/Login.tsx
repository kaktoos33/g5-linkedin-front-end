import { Form, Formik } from "formik";
import { FC, useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "./components/Card/Card";
import { LoginQuery } from "./Login.query";

import { EmailInput, PasswordlInput } from "./components/Input/Input";
import { PrimaryButton, SecondaryButton } from "./components/Button/Button";
import { gql } from "apollo-boost";
import { useMutation } from "react-apollo";
import { Link, useHistory } from "react-router-dom";

interface LoginProps {
  email?: string;
  password?: string;
}
const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(loginRequest: { email: $email, password: $password }) {
      success
      message
      accessToken
      refreshToken
    }
  }
`;

const Login: FC<LoginProps> = () => {
  const history = useHistory();
  const [formState, setFormState] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ login }) => {
      if (login.success) {
        sessionStorage.setItem("accessTtoken", login.accessToken);
        sessionStorage.setItem("refreshToken", login.refreshToken);
        sessionStorage.setItem("loginState", "loggedIn");
        console.log(login);
        window.location.reload();
        history.push("/home");
        // history.replace("/home");
      } else {
        history.push("/");
      }
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
  return (
    <div className="container flex flex-col items-center justify-around min-h-screen bg-primary">
      <Card className="flex flex-col items-center justify-center w-1/3 mx-auto mt-5 bg-white rounded-xl">
        <CardHeader className="px-10 ">
          <h1 className="flex flex-row items-center content-center justify-center px-2 py-1 pb-12 font-semibold rounded text-black-600">
            ورود
          </h1>
        </CardHeader>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values, actions) => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values);
            setFormState({ email: values.email, password: values.password });
            login();
            //LoginQuery(values);
          }}
        >
          <Form className="px-10 ">
            <CardContent>
              <EmailInput
                id="email"
                name="email"
                type="text"
                placeholder={"Username"}
              ></EmailInput>
              <PasswordlInput
                id="password"
                name="password"
                type="password"
                placeholder={"Password"}
              ></PasswordlInput>
              <div dir="ltr" className="flex flex-col items-start pb-10">
                <p className="w-full font-semibold text-blue-600 uppercase rounded ">
                  فراموشی رمز عبور
                </p>
              </div>
            </CardContent>
            <CardAction className="pt-12 pb-5">
              <PrimaryButton></PrimaryButton>
              <label className="flex items-center pb-0">
                <p className="flex flex-row justify-center w-full pt-5 pb-3">
                  <Link to="/register">عضو نیستید؟</Link>
                </p>
              </label>
              <SecondaryButton></SecondaryButton>
            </CardAction>
          </Form>
        </Formik>
      </Card>
    </div>
  );
};

export default Login;
