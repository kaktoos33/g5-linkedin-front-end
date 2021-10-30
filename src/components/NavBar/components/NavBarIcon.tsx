import {
  AnchorHTMLAttributes,
  Children,
  DetailedHTMLProps,
  FC,
  HTMLProps,
} from "react";
import logo from "../../../resources/logo.svg";
import logoin from "../../../resources/in.svg";
import "./NavBarIcon.stryle.scss";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  selected: boolean;
  children?: React.ReactNode;
}

export const Icon: FC<IconProps> = (props: IconProps) => {
  return (
    <div className="iconItem">
      <a
        {...props}
        {...(props.selected
          ? { className: "selected" }
          : { className: "notSelected" })}
      >
        {props.children}
      </a>
    </div>
  );
};

interface LogoProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}
export const Logo: FC<LogoProps> = (props: LogoProps) => {
  return (
    <div {...props}>
      <img src={logo} style={{ height: 40, width: 148 }} />
    </div>
  );
};
