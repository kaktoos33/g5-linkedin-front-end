import React, {useState} from 'react';
import { FunctionComponent } from 'react';
import {Cart} from "./components/cart/Cart";
import {Header} from "./components/header/Header";
import {StringInput} from "./components/input/Input";
import {ButtonPrimary} from "./components/button/Button";
import "./CompanyRegister.Style.scss"
import { Formik, Field, Form , FormikHelpers} from 'formik';
import {RegisterFormInput} from './CompanyRegister.type';

// import {registerValidateSchema} from "./Register.validation";
import {useHistory} from "react-router-dom";
import {useMutation} from "react-apollo";
import {ErrorHandel} from "./components/error/Error";
import {gql} from "apollo-boost";
import {ErrorMessage, useField} from "formik";

interface RegisterQueryProps {
    name: string;
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

export const CompanyRegister : FunctionComponent = () => {
    // const validation = registerValidateSchema()
    const history = useHistory();
    const [formState, setFormState] = useState<RegisterQueryProps>({
        name: "",
    });
    const [register] = useMutation(REGISTER_MUTATION, {
        variables: {
            name: formState.name,
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
                <Header name={"پروفایل"}/>

                <Formik
                    initialValues={{
                        name: '',
                    }}
                    // validationSchema={validation}
                    onSubmit={(
                        values: RegisterFormInput,
                        { setSubmitting }: FormikHelpers<RegisterFormInput>
                    ) => {
                        setFormState({ name: values.name });
                        register();
                    }}
                >
                    <Form>
                        <StringInput name={"CompanyName"} dir={"rtl"} placeholder={"نام شرکت"}/>
                        <ButtonPrimary name={"ثبت"}/>

                    </Form>
                </Formik>

            </Cart>
            {/*<MyForm />*/}

        </div>
    );
};