import React from 'react';
import { FunctionComponent } from 'react';
import {Cart} from "./components/cart/Cart";
import {Header} from "./components/header/Header";
import {EmailInput, PassInput} from "./components/input/Input";
import "./Register.style.scss"


export const Register : FunctionComponent = () => {
    return (

        <div className="h-screen register">
            <Cart>
                <Header />
                <EmailInput />
                <PassInput />
            </Cart>
            {/*<MyForm />*/}

        </div>
    );
};