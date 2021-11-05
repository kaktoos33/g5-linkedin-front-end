import React, { useEffect, useState } from "react";
import { faBell, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Icon, Logo } from "./components/NavBarIcon";
import "./NavBar.style.scss";
import { MessageNotifications } from "../MessageNotifications/MessageNotifications";
// import { Message } from "../MessageNotifications/Message";
import { NotificationMessage } from "../MessageNotifications/NotificationMessage";
import { useHistory } from "react-router-dom";

type message = {
  id: number;
  title: string;
  body: string;
  date: string;
};

const saveCurPage = (curPage: string) => {
  localStorage.setItem("curPage", curPage);
};
const loadCurPage = () => {
  return localStorage.getItem("curPage") === "null"
    ? "/home"
    : localStorage.getItem("curPage");
};

export default function Navbar() {
  const history = useHistory();

  const [formState, setFormState] = useState({
    homeSelected: true,
    alarmSelected: false,
    userSelected: false,
  });
  const [notificationState, setNotificationState] = useState("hidden");
  const [notificationNumber, setNotificationNumber] = useState(5);

  useEffect(() => {
    let lastCurPage = String(loadCurPage());
    console.log(lastCurPage);
    if (lastCurPage === "/home" || lastCurPage === "null") {
      setFormState({
        homeSelected: true,
        alarmSelected: false,
        userSelected: false,
      });
    } else if (lastCurPage === "/message") {
      setFormState({
        homeSelected: false,
        alarmSelected: true,
        userSelected: false,
      });
    } else if (lastCurPage === "/follow") {
      setFormState({
        homeSelected: false,
        alarmSelected: false,
        userSelected: true,
      });
    }
    console.log(window.location.href);
    history.push(lastCurPage);
  }, []);

  const message1: message = {
    id: 1,
    title: "title1",
    body: "body1",
    date: "new Date()",
  };

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
            saveCurPage("/home");
            history.push("/home");
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
            saveCurPage("/message");
            history.push("/message");
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
            saveCurPage("/follow");
            history.push("/follow");
          }}
          selected={formState.userSelected}
        >
          <FontAwesomeIcon className="far userIcon hoverItem" icon={faUsers} />
        </Icon>
        <MessageNotifications
          onMouseEnter={() => {
            if (notificationNumber > 0) setNotificationState("");
          }}
          onMouseLeave={() => {
            setNotificationState("hidden");
          }}
          className={notificationState}
        >
          <NotificationMessage key="1" message={message1}></NotificationMessage>
          <NotificationMessage key="2" message={message1}></NotificationMessage>
          <NotificationMessage key="3" message={message1}></NotificationMessage>
          <NotificationMessage key="4" message={message1}></NotificationMessage>
        </MessageNotifications>
      </div>
    </div>
  );
}
