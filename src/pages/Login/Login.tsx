import { Form, Formik } from "formik";
import { FC, useEffect, useState } from "react";
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
import "./Login.style.scss";
import { useUserContext } from "../../UserContext";
import { User } from "../../models/User";
interface LoginProps {
  email?: string;
  password?: string;
}
const LOGIN_MUTATION =
  // gql`
  // type LoginResponse{
  //   success:Boolean!
  //   message:String!
  //   accessToken:String!
  //   refreshToken:String!
  //   user:UserResponse!
  // }
  // type UserResponse{
  //       userId:String!
  //       isCompany:Boolean!
  // }
  // input LoginRequest{
  //   email:String!
  //   password:String!
  // }
  //   mutation LoginMutation($email: String!, $password: String!) {
  //     login(loginRequest: LoginRequest) {
  //       LoginResponse!
  //     }
  //   }
  gql`
    mutation LoginMutation($email: String!, $password: String!) {
      login(loginRequest: { email: $email, password: $password }) {
        success
        message
        accessToken
        refreshToken
        user {
          userId
          isCompany
        }
      }
    }
  `;
const Login: FC<LoginProps> = () => {
  const { user, setNewUser } = useUserContext();
  const history = useHistory();
  useEffect(() => {
    const loginState = sessionStorage.getItem("loginState");
    if (loginState === "loggedIn") {
      history.push("/");
    }
  });

  const [login] = useMutation(LOGIN_MUTATION);

  return (
    <div className="h-screen login">
      {/*<div className="container flex flex-col items-center justify-around min-h-screen bg-primary login">*/}
      <Card className="flex flex-col items-center justify-center w-1/3 mx-auto mt-5 bg-white rounded-xl">
        <CardHeader className="px-10 ">
          <h1 className="flex flex-row items-center content-center justify-center px-2 py-1 pb-12 mt-10 font-semibold rounded text-black-600">
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
            // setFormState({ email: values.email, password: values.password });
            login({
              variables: {
                email: values.email,
                password: values.password,
              },
            })
              .then((data) => {
                if (data.data.login.success) {
                  sessionStorage.setItem(
                    "accessTtoken",
                    data.data.login.accessToken
                  );
                  sessionStorage.setItem(
                    "refreshToken",
                    data.data.login.refreshToken
                  );
                  sessionStorage.setItem("loginState", "loggedIn");
                  console.log(data.data.login);
                  let newUser: User = { userId: "", isCompany: false };
                  newUser.userId = data.data.login.user.userId;
                  newUser.isCompany = data.data.login.user.isCompany;
                  console.log(newUser);

                  // setNewUser({userId:"r",isCompany:false});
                  alert(data.data.login.success);
                  window.location.reload();
                  history.push("/home");
                  // history.replace("/home");
                } else {
                  alert("Email or password is incorrect!");
                  //   //history.push("/login");
                }
              })
              .catch((error) => {
                console.log(error.message);
                alert(error.message);
              });
            // sessionStorage.setItem("loginState", "loggedIn");
            // window.location.reload();
            // history.push("/home");
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
              <PrimaryButton />
              <label className="flex items-center pb-0">
                <p className="flex flex-row justify-center w-full pt-5 pb-3">
                  <Link to="/register">عضو نیستید؟</Link>
                </p>
              </label>
              <Link to="/register">
                <SecondaryButton></SecondaryButton>
              </Link>
            </CardAction>
          </Form>
        </Formik>
      </Card>
    </div>
  );
};

export default Login;
