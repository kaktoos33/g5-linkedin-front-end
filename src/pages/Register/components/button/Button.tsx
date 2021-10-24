import React from "react";
import './Button.style.scss';

export const ButtonPrimary = () => {
    return (
        <div className="w-full mx-auto text-center register-button">
            <button className="button button-primary">ثبت نام</button>

        </div>
    );
};

export const ButtonSecondary = () => {
    return (
        <div className="w-full mx-auto text-center register-button">
            <button className="button button-secondary w-5/6">ورود</button>
        </div>
    );
};