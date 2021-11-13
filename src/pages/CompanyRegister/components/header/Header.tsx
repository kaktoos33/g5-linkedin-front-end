import React from "react";
import './Header.style.scss';

export const Header = (props:{name:string;}) => {
    return (
        <div className="w-full mx-auto text-center">
            {/*ثبت نام*/}
            <h1 className="register-header-name">
                {props.name}
            </h1>
        </div>
    );
};
