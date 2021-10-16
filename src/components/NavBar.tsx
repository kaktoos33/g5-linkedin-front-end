import React, { useState } from "react";
import logo from "../LinkedIn_Logo_2019.svg";
import { faLock, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { faBell } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  const [formState, setFormState] = useState({
    homeColor: "text-blue-400",
    alarmColor: "text-gray-400",
    userAlarm: "text-gray-400",
  });

  const onHomeClick = () => {
    setFormState({
      homeColor: "text-blue-400",
      alarmColor: "text-gray-400",
      userAlarm: "text-gray-400",
    });
    console.log(formState);
  };

  const onAlarmClick = () => {
    setFormState({
      homeColor: "text-gray-400",
      alarmColor: "text-blue-400",
      userAlarm: "text-gray-400",
    });
    console.log(formState);
  };

  const onUserClick = () => {
    setFormState({
      homeColor: "text-gray-400",
      alarmColor: "text-gray-400",
      userAlarm: "text-blue-400",
    });
    console.log(formState);
  };

  return (
    <nav dir="rtl" className="">
      <div className="px-3"></div>
      <nav className="">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="ml-12">
                <img src={logo} style={{ height: 60, width: 150 }} />
              </div>

              <div className="flex items-baseline ml-10 space-x-4">
                <a
                  href="#"
                  className="px-3 py-2 border-b-4 border-white hover:border-blue-600"
                >
                  <i
                    className={`${formState.homeColor} far fa-2x hover:text-blue-600`}
                    onClick={onHomeClick}
                  >
                    <FontAwesomeIcon icon={faHome} />
                  </i>
                </a>
                <div className="px-5"></div>

                <a
                  href="#"
                  className="px-3 py-2 border-b-4 border-white hover:border-blue-600 "
                >
                  <i
                    className={`${formState.alarmColor} far fa-2x hover:text-blue-600`}
                    onClick={onAlarmClick}
                  >
                    <FontAwesomeIcon icon={faBell} />
                  </i>
                </a>
                <div className="px-5"></div>
                <a
                  href="#"
                  className="px-3 py-2 border-b-4 border-white hover:border-blue-600 "
                >
                  <i
                    className={`${formState.userAlarm} far fa-2x hover:text-blue-600 `}
                    onClick={onUserClick}
                  >
                    <FontAwesomeIcon icon={faUsers} />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </nav>
  );
}
