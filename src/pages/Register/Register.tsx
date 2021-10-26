import React, {useState} from 'react';
import { FunctionComponent } from 'react';
import {Cart} from "./components/cart/Cart";
import {Header} from "./components/header/Header";
import {CheckBoxInput, EmailInput, PassInput} from "./components/input/Input";
import {ButtonPrimary, ButtonSecondary} from "./components/button/Button";
import "./Register.style.scss"
import { Formik, Field, Form , FormikHelpers} from 'formik';
import {RegisterFormInput} from './Register.type';
import {registerValidateSchema} from "./Register.validation";
import {useHistory} from "react-router-dom";
import {useMutation} from "react-apollo";
import {gql} from "apollo-boost";


interface RegisterQueryProps {
    email: string;
    password: string;
    isCompany: boolean;
}

const REGISTER_MUTATION = gql`
    mutation RegisterMutation($email: String!, $password: String!, $isCompany: Boolean!) {
        signup(signupRequest: { email: $email, password: $password, isCompany:$isCompany }) {
            success
            message
            email
            isCompany
        }
    }
`;

export const Register : FunctionComponent = () => {
    const validation = registerValidateSchema()
    const history = useHistory();
    const [formState, setFormState] = useState<RegisterQueryProps>({
        email: "",
        password: "",
        isCompany: false,
    });
    const [register] = useMutation(REGISTER_MUTATION, {
        variables: {
            email: formState.email,
            password: formState.password,
            isCompany: formState.isCompany,
        },
        onCompleted: ({ register }) => {
            history.push("/login");
        },
        onError: (error) => {
            console.log(error.message);
        },
    });
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
                        setFormState({ email: values.email, password: values.password , isCompany: values.is_vendor});
                        register();
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