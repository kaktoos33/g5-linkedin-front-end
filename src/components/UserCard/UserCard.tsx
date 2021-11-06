import { User } from "./types/User.types";
import Usericon from "../../images/Usericon.svg";
import "./UserCard.Style.scss";

type ImageSize = "S" | "M" | "L";

export const UserCard = ({
  user,
  componentname,
  image_size,
}: {
  user: User;
  componentname: string;
  image_size: ImageSize;
}) => {
  const { name, role, img } = user;

  return (
    <div className={`${componentname}_Container_Div || ""`}>
      <div className={`${componentname}_Image_Div || ""`}>
        <img
          src={img || Usericon}
          className={`border-none cursor-pointer rounded-2xl Image_${image_size}`}
          alt=""
        />
      </div>
      <div className={`${componentname}_Info_Div || ""`}>
          <div className={`${componentname}_Name`}>{name}</div>
          <div className={`${componentname}_Role`}>{role}</div>
      </div>
    </div>
  );

  //   if (page === "createpost")
  //     return (
  //       <div className="mt-5 mr-7">
  //         <UserPic width="w-10" height="40px" pic={img ?? Usericon} />
  //       </div>
  //     );
  //   else if (page === "userprofile") {
  //     return (
  //       <div className="flex flex-col items-center justify-end h-full">
  //         <div className="mb-2">
  //           {img && <UserPic width="w-11" height="44px" pic={img} />}
  //           {!img && <UserPic width="w-11" height="44px" pic={Usericon} />}
  //         </div>
  //         <div className="flex">
  //           <UserInfo
  //             name={name}
  //             role={role}
  //             nameclass={nameclass}
  //             roleclass={roleclass}
  //             innerdivclass={innerdivclass}
  //           />
  //         </div>
  //       </div>
  //     );
  //   } else if (page === "connect") {
  //     return (
  //       <div className={outerdivclass}>
  //         <div className="w-1/3 ml-2">
  //           {img && <UserPic width="w-10" height="40px" pic={img} />}
  //           {!img && <UserPic width="w-10" height="40px" pic={Usericon} />}
  //         </div>
  //         <div className="w-2/3">
  //           <UserInfo
  //             name={name}
  //             role={role}
  //             nameclass={nameclass}
  //             roleclass={roleclass}
  //             innerdivclass={innerdivclass}
  //           />
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className={outerdivclass}>
  //         <div>
  //           {img && <UserPic width="w-11" height="44px" pic={img} />}
  //           {!img && <UserPic width="w-11" height="44px" pic={Usericon} />}
  //         </div>
  //         <div>
  //           <UserInfo
  //             name={name}
  //             role={role}
  //             nameclass={nameclass}
  //             roleclass={roleclass}
  //             innerdivclass={innerdivclass}
  //           />
  //         </div>
  //       </div>
  //     );
  //   }
};
