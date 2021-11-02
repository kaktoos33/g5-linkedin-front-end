import { FC, HTMLProps } from "react";
import "../../../Register/components/cart/Cart.style.scss";

interface CardProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Card: FC<CardProps> = (props: CardProps) => {
  return <div className="register-cart  h-5/6" {...props}>{props.children}</div>;
};

export const CardAction: FC<CardProps> = (props: CardProps) => {
  return <div {...props}>{props.children}</div>;
};

export const CardContent: FC<CardProps> = (props: CardProps) => {
  return <div {...props}>{props.children}</div>;
};

export const CardHeader: FC<CardProps> = (props: CardProps) => {
  return <div {...props}>{props.children}</div>;
};
