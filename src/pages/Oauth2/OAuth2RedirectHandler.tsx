import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import {
  Redirect,
  Route,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import { ACCESS_TOKEN } from "../../constants/constants";
import { GET_USER } from "../Home/graphql/query";
import { getUserI, Home } from "../Home/Home";
import Login from "../Login/Login";

type myProp = {
  location: string;
};

//class OAuth2RedirectHandler extends Component {
const OAuth2RedirectHandler: FC = (props: any) => {
  const params = useLocation();
  const history = useHistory();
  console.log("this param" + params);
  console.log("this props" + window.location.search);
  const getUrlParameter = (name: any) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    var results = regex.exec(window.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  const token = getUrlParameter("token");

  const error = getUrlParameter("error");

  sessionStorage.setItem(ACCESS_TOKEN, token);
  sessionStorage.setItem("loginState", "loggedIn");
  console.log("token set");
  const {
    loading: userLoading,
    data: { getUser: user } = {},
    error: userError,
  } = useQuery<getUserI>(GET_USER);
  if (userLoading) {
    return <div>Loading...</div>;
  }
  if (userError || !user) {
    return <div>Error...</div>;
  }
  sessionStorage.setItem("user", JSON.stringify(user));

  if (token) {
    return <Redirect to="/home" />;
  } else {
    console.log("erroro" + error);
    return <Redirect to="/login" />;
  }
};

export default OAuth2RedirectHandler;
