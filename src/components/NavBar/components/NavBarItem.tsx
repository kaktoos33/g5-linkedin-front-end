import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FC,
  useCallback,
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

export const NavBarItem: FC<NavBarItemProps> = ({
  referTo,
  ...props
}: NavBarItemProps) => {
  const history = useHistory();
  const loc: string = useLocation().pathname;
  const location = loc.trim() === "/" ? "/home" : loc;
  const [style, setStyle] = useState(
    props.alarmBadge ? "alarmNotSelected" : "notSelected"
  );
  const setSel = useCallback(() => {
    location.trim() === referTo.trim()
      ? setStyle(props.alarmBadge ? "alarmSelected" : "selected")
      : setStyle(props.alarmBadge ? "alarmNotSelected" : "notSelected");
    console.log(style);
    // console.log(props.referTo);
  }, [location, props.alarmBadge, referTo, style]);

  useEffect(() => {
    setSel();
    console.log(style);
  }, [location, setSel, style]);
  return (
    <div className="iconItem">
      <a
        {...props}
        onClick={() => {
          history.push(referTo);
        }}
        className={`${style} ${props.className}`}
      >
        {props.children}
      </a>
    </div>
  );
};
