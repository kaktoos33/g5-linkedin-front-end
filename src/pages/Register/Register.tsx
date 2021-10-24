import React from 'react';
import { FunctionComponent } from 'react';
import {Cart} from "./components/cart/Cart";
import {Header} from "./components/header/Header";
import {CheckBoxInput, EmailInput, PassInput} from "./components/input/Input";
import {ButtonPrimary, ButtonSecondary} from "./components/button/Button";
import "./Register.style.scss"


export const Register : FunctionComponent = () => {
    return (

        <div className="h-screen register">
            <Cart>
                <Header />
                <EmailInput />
                <PassInput />
                <CheckBoxInput />


                <ButtonPrimary />
                <div className={"register_redirect_login"}>
                    <a href="https://www.google.com/">عضو هستم</a>
                </div>
                <ButtonSecondary />
            </Cart>
            {/*<MyForm />*/}

        </div>
    );
};