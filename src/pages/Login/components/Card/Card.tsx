import { FC, HTMLProps } from "react";

interface CardProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Card: FC<CardProps> = (props: CardProps) => {
  return <div {...props}>{props.children}</div>;
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
