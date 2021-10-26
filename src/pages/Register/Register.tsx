import React from 'react';
import { FunctionComponent } from 'react';
import {Cart} from "./components/cart/Cart";
import {Header} from "./components/header/Header";
import {CheckBoxInput, EmailInput, PassInput} from "./components/input/Input";
import {ButtonPrimary, ButtonSecondary} from "./components/button/Button";
import "./Register.style.scss"
import { Formik, Field, Form , FormikHelpers} from 'formik';
import {RegisterFormInput} from './Register.type';
import {registerValidateSchema} from "./Register.validation";


export const Register : FunctionComponent = () => {
    const validation = registerValidateSchema()
    return (

        <div className="h-screen register">
            <Cart>
                <Header />
                <Formik
                    initialValues={{
                        password: '',
                        email: '',
                        is_vendor: false,
                    }}
                    validationSchema={validation}
                    onSubmit={(
                        values: RegisterFormInput,
                        { setSubmitting }: FormikHelpers<RegisterFormInput>
                    ) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    <Form>
                        <EmailInput />
                        <PassInput />
                        <CheckBoxInput />
                        <ButtonPrimary />
                    </Form>
                </Formik>
                <div className={"register_redirect_login"}>
                    <a href="https://www.google.com/">عضو هستم</a>
                </div>
                <ButtonSecondary />
            </Cart>
            {/*<MyForm />*/}

        </div>
    );
};