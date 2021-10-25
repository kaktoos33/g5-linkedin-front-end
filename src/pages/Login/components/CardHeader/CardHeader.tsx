import { FC } from "react";

interface CardHeaderProps {
  children?: React.ReactNode;
}

export const CardHeader: FC<CardHeaderProps> = ({
  children,
}: CardHeaderProps) => {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto p2">
      {children}
    </div>
  );
};
