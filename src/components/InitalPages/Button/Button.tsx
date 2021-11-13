import React from "react";
import './Button.style.scss';
import { useHistory } from 'react-router-dom';

interface ButtonPropsType {
    name: string;
}

export const ButtonPrimary = (props:ButtonPropsType) => {
    return (
        <div className="w-full mx-auto text-center button-primary-container">
            <button className="button button-primary" type="submit" >{ props.name }</button>

        </div>
    );
};


export const ButtonSecondary = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push("/login");
    }

    return (
        <div className="w-full mx-auto text-center register-button">
            <button onClick={handleClick} className="button button-secondary w-5/6">ورود</button>
        </div>
    );
};