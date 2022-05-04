import React, { ReactNode } from "react";
import "./Card.Style.scss";
//import classNames from 'classname';

export function Card(props: {
  classname?: string;
  children?: ReactNode | undefined;
}) {
  return (
    <div
      className={`container grid bg-white grid-row-3 rounded-3xl ${
        props.classname || ""
      }`}
    >
      {props.children}
    </div>
  );
}
