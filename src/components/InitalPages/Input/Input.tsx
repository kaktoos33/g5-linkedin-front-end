import React, {useState} from "react";
import './Input.style.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faLock, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {ErrorMessage, Field} from 'formik';

interface StringInputType {
    name: string;
    placeholder: string;
    dir: string;
}

export const StringInput = (props:StringInputType) => {
    return (
        <div className={"string_input"}>

            <Field type="text" dir={props.dir}  placeholder={props.placeholder}
                   id={props.name} name={props.name} />

        </div>
    );
};


export const Input = (labelProp: { input_holder: string }) => {
    return (
        <div>
            <label htmlFor="" className="text-sm font-bold text-grey-600 block">{labelProp.input_holder}</label>
            <input type="text" className="w-full p-2 border border-grey-300 rounded mt-1"/>
        </div>
    );
};

