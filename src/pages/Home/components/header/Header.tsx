import { User } from '../../types/User.types';
import Usericon from '../../../../images/Usericon.svg'
import { UserPic } from "./UserPic";

export const Header = (props:
    {
        user: User;
        page: string;

    }) => {
    const { name, role, img } = props.user;
    if (props.page === "createpost") 
        return (
            <div className="mt-5 mr-7" >
                {img && <UserPic pic= {img} />}
                {!img && <UserPic pic={Usericon} />}
            </div>
        )
    
    if (props.page === "userpost") {
        return (
            <div className="flex mt-6 mb-4 mr-9">
                {img && <UserPic pic= {img} />}
                {!img && <UserPic pic={Usericon} />}
                <div className="mr-3.5">
                    <div className="font-sans text-base font-semibold cursor-pointer name-hover" >{name}</div>
                    <div className="font-sans text-sm text-gray-400 cursor-pointer" >{role}</div>
                </div>
            </div>
        )
    }
    return(
        <></>
    )
}


