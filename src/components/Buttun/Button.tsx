import React, { MouseEventHandler } from "react";
import "./Button.Style.scss";

type GroupType = "Primary" | "Secondary";

type ButtonType = "button" | "submit" | "reset";

type LangType = "fa" | "en";

type SizeType = "M" | "L" | "XL";

export const Button = ({
  children,
  type,
  gruop,
  lang,
  size,
  on_Click,
}: {
  children: JSX.Element | string;
  type: ButtonType;
  gruop: GroupType;
  lang: LangType;
  size: SizeType;
  on_Click?: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button
      type={type}
      className={`button button_${gruop} button_${lang} button_${size}`}
      onClick={on_Click}
    >
      {children}
    </button>
  );
};
