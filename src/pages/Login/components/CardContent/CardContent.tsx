import { FC } from "react";

interface CardContentProps {
  children?: React.ReactNode;
}

export const CardContent: FC<CardContentProps> = ({
  children,
}: CardContentProps) => {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto p2">
      {children}
    </div>
  );
};
