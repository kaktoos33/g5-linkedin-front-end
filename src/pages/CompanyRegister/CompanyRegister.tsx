import React, {useState} from 'react';
import { FunctionComponent } from 'react';
import {Cart} from "../../components/InitalPages/Cart/Cart";
import {Header} from "../../components/InitalPages/Header/Header";
import {StringInput} from "../../components/InitalPages/Input/Input";
import {ButtonPrimary} from "../../components/InitalPages/Button/Button";
import "./CompanyRegister.Style.scss"
import { Formik, Field, Form , FormikHelpers} from 'formik';
import {RegisterFormInput} from './CompanyRegister.type';
import {useHistory} from "react-router-dom";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
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

        <div className="company-register cart-container">
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

        </div>
    );
};