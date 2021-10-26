import { Form, Formik, useFormik, FormikProps } from "formik";
import { FC } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "./components/Card/Card";
import { LoginQuery } from "./Login.query";

import { EmailInput, PasswordlInput } from "./components/Input/Input";
import { PrimaryButton, SecondaryButton } from "./components/Button/Button";

interface LoginProps {
  email: string;
  password: string;
}

const Login: FC<LoginProps> = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Card className="container flex flex-col items-center justify-center w-1/3 mx-auto bg-white ">
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
            LoginQuery(values);
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
            <CardAction className="pt-12">
              <PrimaryButton></PrimaryButton>
              <label className="flex items-center pb-0">
                <p className="flex flex-row justify-center w-full pt-5 pb-3">
                  عضو نیستید؟
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
