import { FC } from "react";

interface NotificationPageProps {}

export const NotificationPage: FC<NotificationPageProps> = () => {
  return (
    <div className="flex justify-center bg-white mt-9 ">
      <div className="w-1/5 max-w-xs ">1</div>
      <div className="w-3/5 max-w-xl mx-3.5">2 </div>
      <div className="w-1/5 max-w-xs">3</div>
    </div>
  );
};
