import React from 'react';
import { FunctionComponent } from 'react';
import "./Error.style.scss";


export const ErrorHandel : FunctionComponent = ErrorProp => {
    return (
        <div className="error_handel_register">
            { ErrorProp.children }
        </div>
    );
};