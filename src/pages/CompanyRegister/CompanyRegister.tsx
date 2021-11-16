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

const COMPANY_REGISTER_MUTATION = gql`
    mutation CompanyRegisterMutation($name: String!, $description: String) {
        signupCompany(CompanySignupRequest: { name: $name, description: $description}) {
            success
            message
        }
    }
`;

export const CompanyRegister : FunctionComponent = () => {
    // const validation = registerValidateSchema()
    const history = useHistory();
    const [formState, setFormState] = useState<RegisterQueryProps>({
        name: "",
    });
    const [signupCompany] = useMutation(COMPANY_REGISTER_MUTATION, {
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
                        signupCompany();
                    }}
                >
                    <Form>
                        <StringInput name={"CompanyName"} dir={"rtl"} placeholder={"نام شرکت"}/>
                        <StringInput name={"CompanyDescription"} dir={"rtl"} placeholder={"توضیحات"}/>
                        <ButtonPrimary name={"ثبت"}/>

                    </Form>
                </Formik>

            </Cart>

        </div>
    );
};