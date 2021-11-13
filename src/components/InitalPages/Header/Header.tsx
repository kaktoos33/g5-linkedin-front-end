import React from "react";
import './Header.style.scss';

export const Header = (props:{name:string;}) => {
    return (
        <div className="w-full mx-auto text-center">
            <h1 className="header-name">
                {props.name}
            </h1>
        </div>
    );
};
