import React from "react";
import './Input.style.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";


export const Input = (labelProp: { input_holder: string }) => {
    return (
        <div>
            <label htmlFor="" className="text-sm font-bold text-grey-600 block">{labelProp.input_holder}</label>
            <input type="text" className="w-full p-2 border border-grey-300 rounded mt-1"/>
        </div>
    );
};

export const EmailInput = () => {
    return (
        // <div className={"w-5/6 p-2 register_email_input"}>
        <div className={"register_email_input"}>
            {/*<label htmlFor="" className="text-sm font-bold text-grey-600 block">Email</label>*/}
            <i className="mx-2 text-gray-400">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </i>

            <input type="text" dir={"ltr"}  placeholder={"Email"} id={"email"} name={"email"}/>
            {/*<label htmlFor={"email"}>*/}
            {/*    <i className="mx-2 text-gray-400">*/}
            {/*        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>*/}
            {/*    </i>*/}

            {/*</label>*/}
        </div>
    );
};