import { FC } from "react";

interface CardProps {
  children?: React.ReactNode;
}

export const Card: FC<CardProps> = ({ children }: CardProps) => {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto p2">
      {children}
    </div>
  );
};
