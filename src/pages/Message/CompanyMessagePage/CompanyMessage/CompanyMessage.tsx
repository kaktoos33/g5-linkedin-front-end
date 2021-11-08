import { FC } from "react";
import { Button } from "../../../../components/Buttun/Button";
import { UserCard } from "../../../../components/UserCard/UserCard";
import { MessageType } from "../../MessagePage";
import "./CompanyMessage.Style.scss";

interface CompanyMessageProps {
  message: MessageType;
}
export const CompanyMessage: FC<CompanyMessageProps> = (
  message: CompanyMessageProps
) => {
  return (
    <div className="companyMessageCard">
      <div className="flex flex-row w-full px-6 mb-6 companyMessageBody ">
        <div className="flex flex-col w-3/4">
          <UserCard
            user={message.message.user}
            componentname={"CompanyMessage"}
            image_size="S"
          />
        </div>

        <div className="flex flex-col w-1/4 ">
          <div className=" companyMessageButton">
            <Button type="button" gruop="Primary" lang="fa" size="M">
              مشاهده
            </Button>
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};
