import { Form, Formik } from "formik";
import React, { FC, useEffect } from "react";
import { Cart } from "../../components/InitalPages/Cart/Cart";
import { Header } from "../../components/InitalPages/Header/Header";
import {
  EmailInput,
  PassInput,
} from "../../components/InitalPages/Input/Input";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../components/InitalPages/Button/Button";
import { Status } from "../../components/InitalPages/Description/Description";
import { gql, useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
// import "./Login.style.scss";
import { useUserContext } from "../../UserContext";
import { User } from "../../models/User";
import { ErrorHandel } from "../Register/components/error/Error";
import SocialLogin from "./SocialLogin";
import { getUserI } from "../Home/Home";
import { GET_USER } from "../Home/graphql/query";
import { ACCESS_TOKEN } from "../../constants/constants";
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
          isActive
          name
          description
        }
      }
    }
  `;

type loginProps = {
  setUser?: () => User;
  component?: JSX.Element;
};

const Login: FC<loginProps> = ({ setUser, component }: loginProps) => {
  // const { user, setUser } = useUserContext();

  const history = useHistory();

  // useEffect(() => {
  //   const loginState = sessionStorage.getItem("loginState");
  //   if (loginState === "loggedIn" && user.isActive) {
  //     history.push("/");
  //   }
  // });

  const [login] = useMutation(LOGIN_MUTATION);

  return (
    <div className="login cart-container">
      {/*<div className="container flex flex-col items-center justify-around min-h-screen bg-primary login">*/}
      <Cart>
        <Header name={"ورود"} />

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values, actions) => {
            // alert(JSON.stringify(values, null, 2));
            //console.log(values);
            // setFormState({ email: values.email, password: values.password });
            // setUser({ userId: "mehdi", isCompany: true });

            login({
              variables: {
                email: values.email,
                password: values.password,
              },
            })
              .then((data) => {
                const loginResponse = data.data.login;
                console.log(loginResponse);

                const userResponse = data.data.login.user;

                if (loginResponse.success) {
                  console.log(userResponse, "userRespons");
                  sessionStorage.setItem(
                    ACCESS_TOKEN,
                    loginResponse.accessToken
                  );
                  // sessionStorage.setItem(
                  //   "accessToken",
                  //   loginResponse.accessToken
                  // );
                  // sessionStorage.setItem(
                  //   "refreshToken",
                  //   loginResponse.refreshToken
                  // );
                  // sessionStorage.setItem("id", userResponse.userId);

                  sessionStorage.setItem("loginState", "loggedIn");
                  //console.log(data.data.login);
                  // setNewUser(userResponse);

                  sessionStorage.setItem("user", JSON.stringify(userResponse));

                  // setUser(userResponse);
                  // console.log(userResponse);
                  // console.log(user)
                  // alert(user)

                  // console.log(userResponse);
                  //console.log(user);

                  // setNewUser({userId:"r",isCompany:false});
                  // alert(data.data.login.success);
                  if (loginResponse.user.isActive) {
                    // window.location.reload();
                    alert("User is active");
                    history.push("/home");
                  } else {
                    if (loginResponse.user.isCompany) {
                      alert("company is not active");
                      // window.location.reload();
                      history.push("/company_register");
                    } else {
                      alert("user is not active");
                      // window.location.reload();
                      history.push("/user_register");
                    }
                  }

                  // history.push("/home");
                  // history.replace("/home");
                  // console.log("after push");
                } else {
                  alert("Email or password is incorrect!");
                  //   //history.push("/login");
                }
              })
              .catch((error) => {
                console.log("error occured");
                console.log(error.message);
                alert(error.message);
              });
            // sessionStorage.setItem("loginState", "loggedIn");
            // window.location.reload();
            // history.push("/home");
            //LoginQuery(values);
          }}
        >
          <Form>
            <SocialLogin />
            <EmailInput />
            <PassInput />
            <ErrorHandel></ErrorHandel>
            <ButtonPrimary name={"ورود"} />
          </Form>
        </Formik>
        <Status name={"عضو نیستید؟"} />
        <ButtonSecondary name={"ثبت نام"} path={"/register"} />
      </Cart>
    </div>
  );
};

export default Login;
function useNavigate() {
  throw new Error("Function not implemented.");
}
