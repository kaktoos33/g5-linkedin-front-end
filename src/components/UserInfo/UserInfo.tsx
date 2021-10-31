import { User } from '../../pages/Home/types/User.types';
import Usericon from '../../images/Usericon.svg'
import { UserPic } from "./UserPic";
import "./UserInfo.Style.scss"

export const UserInfo = (props:
    {
        user: User;
        page: string;

    }) => {
    const { name, role, img } = props.user;
    if (props.page === "createpost")
        return (
            <div className="mt-5 mr-7" >
                {img && <UserPic pic={img} />}
                {!img && <UserPic pic={Usericon} />}
            </div>
        )
    else if (props.page === "userprofile") {
        return (
            <div className="flex mt-6 mb-4 mr-9">
                {img && <UserPic pic={img} />}
                {!img && <UserPic pic={Usericon} />}
                <div className="mr-3.5">
                    <div className="namefont">{name}</div>
                    <div className="font-sans text-sm text-gray-400 cursor-pointer" >{role}</div>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className="flex mt-6 mb-4 mr-9">
                {img && <UserPic pic={img} />}
                {!img && <UserPic pic={Usericon} />}
                <div className="mr-3.5">
                    <div className="namefont" >{name}</div>
                    <div className="font-sans text-sm text-gray-400 cursor-pointer" >{role}</div>
                </div>
            </div>
        )
    }
    return (
        <></>
    )
}


