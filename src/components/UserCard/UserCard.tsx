import { User } from "./types/User.types";
import { UserClass } from "./types/UserClass.type";
import Usericon from "../../images/Usericon.svg";
import { UserPic } from "./UserPic";
import { UserInfo } from "./UserInfo";
import "./UserCard.style.scss";

export const UserCard = (props: {
  user: User;
  page: string;
  calssnames: UserClass;
}) => {
  const { name, role, img } = props.user;

  const { nameclass, roleclass, outerdivclass, innerdivclass } =
    props.calssnames;

  if (props.page === "createpost")
    return (
      <div className="mt-5 mr-7">
        <UserPic width="w-10" height="40px" pic={img ?? Usericon} />
      </div>
    );
  else if (props.page === "userprofile") {
    return (
      <div className="flex flex-col items-center justify-end h-full">
        <div className="mb-2">
          {img && <UserPic width="w-11" height="44px" pic={img} />}
          {!img && <UserPic width="w-11" height="44px" pic={Usericon} />}
        </div>
        <div className="flex">
          <UserInfo
            name={name}
            role={role}
            nameclass={nameclass}
            roleclass={roleclass}
            innerdivclass={innerdivclass}
          />
        </div>
      </div>
    );
  } else if (props.page === "connect") {
    return (
      <div className={outerdivclass}>
        <div className="w-1/3 ml-2">
          {img && <UserPic width="w-10" height="40px" pic={img} />}
          {!img && <UserPic width="w-10" height="40px" pic={Usericon} />}
        </div>
        <div className="w-2/3">
          <UserInfo
            name={name}
            role={role}
            nameclass={nameclass}
            roleclass={roleclass}
            innerdivclass={innerdivclass}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={outerdivclass}>
        <div>
          {img && <UserPic width="w-11" height="44px" pic={img} />}
          {!img && <UserPic width="w-11" height="44px" pic={Usericon} />}
        </div>
        <div>
          <UserInfo
            name={name}
            role={role}
            nameclass={nameclass}
            roleclass={roleclass}
            innerdivclass={innerdivclass}
          />
        </div>
      </div>
    );
  }
  return <></>;
};
