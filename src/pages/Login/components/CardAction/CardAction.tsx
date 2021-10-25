import { FC } from "react";

interface CardActionProps {
  children?: React.ReactNode;
}

export const CardAction: FC<CardActionProps> = ({
  children,
}: CardActionProps) => {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto p2">
      {children}
    </div>
  );
};
