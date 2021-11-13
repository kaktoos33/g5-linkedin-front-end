import React from "react";
import './Description.Style.scss';

export const Status = (props:{name:string;}) => {
    return (
        <div className="auth-status">
            <p>{props.name}</p>
        </div>
    );
};
