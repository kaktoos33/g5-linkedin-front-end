import React, { useState } from "react";
import { Card } from "../Card/Card";
import { User } from "../../models/User";
import { SeeMore } from "../MoreLink/SeeMore";
import { FollowCard } from "./FollowCard";
import "../Responsive.Style.scss";
import "./Follow.Style.scss";
import { Friend } from "../../models/Friend";

interface ConnectProps {
  connecetlist: Array<Friend>;
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
  console.log(connecetlist, 4555);
  if (!connecetlist)
    connecetlist = [
      {
        userId: "",
        name: "",
        description: "",
        status: "",
      },
    ];

  const connect = React.useCallback(
    (min: number, max: number) =>
      connecetlist
        .slice(min, max)
        .map((req, index) => (
          <FollowCard
            req={req}
            key={index.toString()}
            butname={butname}
            type={type}
          />
        )),
    [butname, connecetlist, type]
  );

  const linkName = seeMore ? "کمتر" : "بیشتر";

  const onclick = () => {
    setSeeMore(!seeMore);
  };
  return (
    <div className="overflow-hidden">
      <Card classname={`${type}`}>
        <div className={`flex mb-6 ${type}_Title`}>{title}</div>

        {connect(0, 3)}

        {seeMore && connect(3, 6)}

        <SeeMore linkName={linkName} onclick={onclick} />
      </Card>
    </div>
  );
};
