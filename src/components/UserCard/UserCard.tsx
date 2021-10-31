import { User } from './types/User.types';
import { UserClass } from './types/UserCalss.type'
import Usericon from '../../images/Usericon.svg'
import { UserPic } from "./UserPic";
import { UserInfo } from "./UserInfo";
import "./UserCard.Style.scss"

export const UserCard = (props:
    {
        user: User;
        page: string;
        calssnames: UserClass;

    }) => {
    const { name, role, img } = props.user;

    const { nameclass, roleclass, outerdivclass, innerdivclass } = props.calssnames;

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

                <UserInfo name={name} role={role} nameclass={nameclass} roleclass={roleclass}
                    innerdivclass={innerdivclass} />

            </div>
        )
    }
    else if (props.page === "connect") 
    {
        return (
            <div className={outerdivclass}>
                <div className="w-1/3">
                    {img && <UserPic pic={img} />}
                    {!img && <UserPic pic={Usericon} />}
                </div>
                <div className="w-2/3">
                    <UserInfo name={name} role={role} nameclass={nameclass} roleclass={roleclass}
                        innerdivclass={innerdivclass} />
                </div>

            </div>
        )
    }

    else {
        return (
            <div className={outerdivclass}>
                <div>
                    {img && <UserPic pic={img} />}
                    {!img && <UserPic pic={Usericon} />}
                </div>
                <div>
                    <UserInfo name={name} role={role} nameclass={nameclass} roleclass={roleclass}
                        innerdivclass={innerdivclass} />
                </div>

            </div>
        )
    }
    return (
        <></>
    )
}