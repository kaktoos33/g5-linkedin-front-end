import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FC,
  useEffect,
  useState,
} from "react";
import "./NavBarItem.Style.scss";
import { useHistory, useLocation } from "react-router-dom";

interface NavBarItemProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  referTo: string;
  alarmBadge?: boolean;
  children?: React.ReactNode;
}

export const NavBarItem: FC<NavBarItemProps> = (props: NavBarItemProps) => {
  const history = useHistory();
  let loc: string = useLocation().pathname;
  if (loc.trim() === "/") loc = "/home";
  const [style, setStyle] = useState(
    props.alarmBadge ? "alarmNotSelected" : "notSelected"
  );
  const setSel = () => {
    loc.trim() === props.referTo.trim()
      ? setStyle(props.alarmBadge ? "alarmSelected" : "selected")
      : setStyle(props.alarmBadge ? "alarmNotSelected" : "notSelected");
    console.log(style);
    // console.log(props.referTo);
  };
  useEffect(() => {
    console.log("avaz shod be ");
    setSel();
    console.log(style);
  }, [loc]);
  return (
    <div className="iconItem">
      <a
        {...props}
        onClick={() => {
          history.push(props.referTo);
        }}
        className={`${style} ${props.className}`}
      >
        {props.children}
      </a>
    </div>
  );
};
