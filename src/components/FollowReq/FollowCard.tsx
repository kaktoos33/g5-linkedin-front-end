import React from "react";
import { Button } from "../Buttun/Button";
import { User } from "../../models/User";
import { UserCard } from "../UserCard/UserCard";
import { Friend } from "../../models/Friend";
import { gql, useMutation } from "@apollo/client";
import { userInfo } from "os";

const MAKE_CONNECTION_MUTATION = gql`
  mutation sendFriendshipRequest($userId: ID!) {
    sendFriendshipRequest(userId: $userId)
  }
`;
const ACCEPT_CONNECTION_MUTATION = gql`
  mutation acceptFriendshipRequest($userId: ID!) {
    acceptFriendshipRequest(userId: $userId)
  }
`;
const DENY_CONNECTION_MUTATION = gql`
  mutation denyFriendshipRequest($userId: ID!) {
    denyFriendshipRequest(userId: $userId)
  }
`;

export const FollowCard = ({
  req,
  butname,
  type,
}: {
  req: Friend;
  butname: string;
  type: string;
}) => {
  const [makeConnection, { error }] = useMutation(MAKE_CONNECTION_MUTATION);
  const [acceptConnection] = useMutation(ACCEPT_CONNECTION_MUTATION);
  const [denyConnection] = useMutation(DENY_CONNECTION_MUTATION);
  console.log(Number(req.userId));
  console.log(req);
  const onClickButton = () => {
    if (req.status === "notFriend") {
      makeConnection({
        variables: {
          userId: Number(req.userId),
        },
      });
      if (error) {
        console.log(error);
      }
    } else if (req.status === "requestReceived") {
      acceptConnection({
        variables: {
          userId: Number(req.userId),
        },
      });
      if (error) {
        console.log(error);
      }
    } else if (req.status === "requestSent") {
    }
  };
  const onClickIgnore = () => {
    denyConnection({
      variables: {
        userId: Number(req.userId),
      },
    });
    if (error) {
      console.log(error);
    }
  };
  const userFriend: User = {
    userId: req.userId || "0",
    name: req.name,
    description: req.description,
  };
  return (
    <div className="flex">
      <div className="w-2/3">
        <UserCard user={userFriend} componentname={type} image_size="S" />
      </div>

      <div dir="ltr" className="w-1/3 Button_Div">
        <Button
          type="button"
          gruop="Primary"
          lang="en"
          size="M"
          on_Click={onClickButton}
        >
          {req.status === "friend"
            ? "Delete"
            : req.status === "notFriend"
            ? "Connect"
            : req.status === "requestReceived"
            ? "Accept"
            : "Request Sent"}
        </Button>
        {req.status === "requestReceived" && (
          <label className="Ignore_Label" onClick={onClickIgnore}>
            Ignore
          </label>
        )}
      </div>
    </div>
  );
};
