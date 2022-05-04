import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, InputHTMLAttributes } from "react";
import { Field } from "formik";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = (props: InputProps) => {
  return (
    <div>
      <input {...props}></input>
    </div>
  );
};

export const EmailInput: FC<InputProps> = (props: InputProps) => {
  return (
    <div className="flex items-center mb-4 border border-solid rounded-xl border-grey-600">
      <Field
        {...props}
        dir="ltr"
        className="items-center w-full h-12 px-12 bg-white rounded-xl focus:outline-none hover:cursor-pointer"
      ></Field>
      <i className="mx-2 text-gray-400">
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
      </i>
    </div>
  );
};

export const PasswordlInput: FC<InputProps> = (props: InputProps) => {
  return (
    <div className="flex items-center mb-3 border border-solid rounded-xl border-grey-600">
      <Field
        {...props}
        dir="ltr"
        className="w-full h-12 px-12 bg-white rounded-xl focus:outline-none hover:cursor-pointer"
      ></Field>
      <i className="mx-2 text-gray-400 top-3 left-4">
        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
      </i>
    </div>
  );
};
