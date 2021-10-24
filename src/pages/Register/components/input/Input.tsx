import React from "react";
import './Input.style.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faLock, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";


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
            <i className="mx-2">
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

export const PassInput = () => {
    const visible = false;
    return (
        // <div className={"w-5/6 p-2 register_email_input"}>
        <div className={"register_pass_input"}>

            <i className="mx-2 lockIcon">
                <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
            </i>

            <input type="password" dir={"ltr"}  placeholder={"Password"} id={"password"} name={"password"}/>

            <i className="eyeIcon">
                <FontAwesomeIcon icon={visible ? faEye:faEyeSlash}></FontAwesomeIcon>
            </i>

        </div>
    );
};

export const CheckBoxInput = () => {

    return (
        // <div className={"w-5/6 p-2 register_email_input"}>
        <div className={"register_checkbox_input"}>

            <label htmlFor={"is_vendor"}>
                <input type="checkbox"  id={"is_vendor"} name={"is_vendor"} />
                <span>اکانت شرکتی</span>
            </label>

        </div>
    );
};