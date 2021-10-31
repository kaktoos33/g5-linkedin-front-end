import React, { useEffect, useState } from "react";
import { faBell, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Icon, Logo } from "./components/NavBarIcon";
import "./NavBar.style.scss";
import { MessageNotifications } from "../MessageNotifications/MessageNotifications";

export default function Navbar() {
  const [formState, setFormState] = useState({
    homeSelected: true,
    alarmSelected: false,
    userSelected: false,
  });
  const [notificationState, setNotificationState] = useState("hidden");
  const [notificationNumber, setNotificationNumber] = useState(5);

  return (
    <div className="navbar">
      <Logo className="logo"></Logo>

      <div className="vl"></div>

      <div className="icon">
        <Icon
          {...(formState.homeSelected
            ? { className: "selected" }
            : { className: "notSelected" })}
          onClick={() => {
            setFormState({
              homeSelected: true,
              alarmSelected: false,
              userSelected: false,
            });
          }}
          selected={formState.homeSelected}
        >
          <FontAwesomeIcon className="far homeIcon hoverItem" icon={faHome} />
        </Icon>

        <Icon
          onMouseEnter={() => {
            if (notificationNumber > 0) {
              setNotificationState("");
            }
          }}
          onMouseLeave={() => {
            setNotificationState("hidden");
          }}
          {...(formState.alarmSelected
            ? { className: "alarmSelected" }
            : { className: "alarmNotSelected" })}
          onClick={() => {
            setFormState({
              homeSelected: false,
              alarmSelected: true,
              userSelected: false,
            });
          }}
          selected={formState.alarmSelected}
        >
          <FontAwesomeIcon
            className="far fa-2x hoverItem alarm"
            icon={faBell}
          />
          <span className={notificationNumber === 0 ? "hidden-badge" : "badge"}>
            +{notificationNumber}
          </span>
        </Icon>

        <Icon
          {...(formState.userSelected
            ? { className: "selected" }
            : { className: "notSelected" })}
          onClick={() => {
            setFormState({
              homeSelected: false,
              alarmSelected: false,
              userSelected: true,
            });
          }}
          selected={formState.userSelected}
        >
          <FontAwesomeIcon className="far userIcon hoverItem" icon={faUsers} />
        </Icon>
        <MessageNotifications
          onMouseEnter={() => {
            setNotificationState("");
          }}
          onMouseLeave={() => {
            setNotificationState("hidden");
          }}
          className={notificationState}
        >
          test
        </MessageNotifications>
      </div>
    </div>
  );
}
