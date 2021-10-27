import "@fortawesome/fontawesome-free/css/all.min.css";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

type loginType = {
  login: boolean;
  email: string;
  password: string;
  username: string;
};

interface LoginContainerProps {
  // setUsername:(username:string)=>void,
  // setPassword:(password:string)=>void,
  formState: loginType;
  setFormState: (loginState: loginType) => void;
  onSubmit: () => void;
}

const LoginContainer: FunctionComponent<LoginContainerProps> = (props) => {
  const { formState, setFormState, onSubmit } = props;
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen mx-auto flex-column p2 bg-white">
      <h1 className="flex flex-row items-center content-center justify-center w-1/3 px-2 py-1 pb-12 font-semibold rounded text-black-600">
        ورود
      </h1>

      <div className="flex items-center w-1/3 mb-3 border border-solid rounded-xl border-grey-600">
        <input
          type="text"
          className="items-center w-full h-12 px-12 bg-white rounded-xl focus:outline-none hover:cursor-pointer"
          placeholder={"Username"}
          onChange={(event) => {
            setFormState({
              ...formState,
              username: event.target.value,
            });
          }}
        />
        <i className="mx-2 text-gray-400">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </i>
      </div>

      <div className="flex items-center w-1/3 pb-0 border border-solid rounded-xl border-grey-600">
        <input
          type="password"
          className="w-full h-12 px-12 bg-white rounded-xl focus:outline-none hover:cursor-pointer"
          placeholder={"Password"}
          onChange={(event) => {
            setFormState({
              ...formState,
              password: event.target.value,
            });
          }}
        />
        <i className="mx-2 text-gray-400 top-3 left-4">
          <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
        </i>
      </div>
      <div className="flex flex-col items-end w-1/3 pb-10">
        <Link to="/">
          <p className="w-full font-semibold text-blue-400 uppercase rounded ">
            فراموشی رمز عبور
          </p>
        </Link>
      </div>
      <div className="flex items-center w-1/3 pb-0 ">
        <button
          className="w-full h-12 font-bold text-blue-400 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-400 border-solid rounded-full outline-none w-fullh-12 hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none"
          type="submit"
          onClick={onSubmit}
        >
          ورود
        </button>
      </div>
      <label className="flex items-center w-1/3 pb-0">
        <p className="flex flex-row justify-center w-full pt-5 pb-3">
          عضو نیستید؟
        </p>
      </label>
      <div className="flex items-center w-1/3 pb-0">
        <button
          className="w-full h-12 mb-1 mr-1 font-bold text-blue-400 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-400 border-solid rounded-full outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none"
          type="submit"
        >
          ثبت نام
        </button>
      </div>
    </div>
  );
};

export default LoginContainer;
