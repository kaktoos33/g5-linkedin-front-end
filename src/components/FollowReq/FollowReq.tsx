import React, { useState } from "react";
import { Card } from "../Card/Card";
import { User } from "../UserCard/types/User.types";
import { UserClass } from "../UserCard/types/UserClass.type";
import { SeeMore } from "../MoreLink/SeeMore";
import { FollowCard } from "./FollowCard";
import "../Responsive.Style.scss";
import "./Follow.style.scss";

interface ConnectProps {
  connecetlist: Array<User>;
  title: string;
  type: string;
  butname: string;
}

export const FollowReq = ({
  connecetlist,
  title,
  type,
  butname,
}: ConnectProps) => {
    
  const [seeMore, setSeeMore] = useState(false);

  const classname: UserClass = React.useMemo(
    () => ({
      nameclass: `${type}_name`,
      roleclass: `${type}_role`,
      outerdivclass: `${type}_outerdiv_class`,
      innerdivclass: `${type}_innerdiv_class`,
    }),
    [type]
  );

  const connect = React.useCallback((min:number , max:number) =>
      connecetlist
        .slice(min, max)
        .map((req, index) => (
          <FollowCard
            req={req}
            key={index.toString()}
            classname={classname}
            page={type}
            butname={butname}
          />
        )),
    [butname, classname, connecetlist, type]
  );

  const linkName = seeMore ? "کمتر" : "بیشتر";

  const onclick = () => {
    setSeeMore(!seeMore);
  };
  return (
    <div className="overflow-hidden">
      <Card classname={`${type}`}>
        <div className={`flex mb-6 ${type}-title`}>{title}</div>

        {connect(0,3)}

        {seeMore && connect(3,6)}

        <SeeMore linkName={linkName} onclick={onclick} />
        
      </Card>
    </div>
  );
};
