import React, { useEffect, useState } from "react";
import logo from "../../resources/LinkedIn_Logo_2019.svg";
import { faLock, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Icon, Logo } from "./components/NavBarIcon";
import "./NavBar.style.scss";

export default function Navbar() {
  const [formState, setFormState] = useState({
    homeSelected: true,
    alarmSelected: false,
    userSelected: false,
  });

  return (
    <div className="navbar">
      <Logo className="logo"></Logo>

      <div className="vl"></div>

      <div className="icon">
        <Icon
          onClick={() => {
            setFormState({
              homeSelected: true,
              alarmSelected: false,
              userSelected: false,
            });
          }}
          selected={formState.homeSelected}
        >
          <FontAwesomeIcon className="far fa-2x hoverItem" icon={faHome} />
        </Icon>

        <Icon
          onClick={() => {
            setFormState({
              homeSelected: false,
              alarmSelected: true,
              userSelected: false,
            });
          }}
          selected={formState.alarmSelected}
        >
          <FontAwesomeIcon className="fas fa-2x hoverItem" icon={faBell} />
        </Icon>

        <Icon
          onClick={() => {
            setFormState({
              homeSelected: false,
              alarmSelected: false,
              userSelected: true,
            });
          }}
          selected={formState.userSelected}
        >
          <FontAwesomeIcon className="far fa-2x hoverItem" icon={faUsers} />
        </Icon>
      </div>
    </div>
  );
}
