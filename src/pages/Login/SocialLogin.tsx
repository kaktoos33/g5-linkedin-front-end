import React, { Component } from "react";

import fbLogo from "../../images/fb-logo.png";
import googleLogo from "../../images/google-logo.png";
import githubLogo from "../../images/github-logo.png";
import {
  FACEBOOK_AUTH_URL,
  GITHUB_AUTH_URL,
  GOOGLE_AUTH_URL,
} from "../../constants/constants";
import "./Login.style.scss";

class SocialLogin extends Component {
  render() {
    return (
      <div className="flex flex-dir:row">
        <a className="" href={GOOGLE_AUTH_URL}>
          <img src={googleLogo} alt="Google" /> Log in with Google
        </a>
        <a className="" href={FACEBOOK_AUTH_URL}>
          <img src={fbLogo} alt="Facebook" /> Log in with Facebook
        </a>
        <a className="" href={GITHUB_AUTH_URL}>
          <img src={githubLogo} alt="Github" /> Log in with Github
        </a>
      </div>
    );
  }
}

export default SocialLogin;
