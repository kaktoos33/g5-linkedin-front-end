import { User } from '../../types/User.types';
import Usericon from '../../../../images/Usericon.jpg'

export const Header = (props:
    {
        user: User;
        page: String;

    }) => {
    const { name, role, img } = props.user;
    if (props.page === "createpost") 
        return (
            <div className="user">
                {img && <div ><img src={img}
                    className="h-auto max-w-full align-middle border-none rounded-full cursor-pointer"
                    alt="" /></div>}
                {!img && <div><img src={Usericon}
                    className="h-auto max-w-full align-middle border-none rounded-full cursor-pointer"
                    alt="" /></div>}
            </div>
        )
    
    if (props.page === "userpost") {
        return (
            <div className="flex mb-6">
                {img && <div ><img src={img}
                    className="h-auto max-w-full align-middle border-none rounded-full cursor-pointer"
                    alt="" /></div>}
                {!img && <div><img src={Usericon}
                    className="h-auto max-w-full align-middle border-none rounded-full cursor-pointer"
                    alt="" /></div>}
                <div className="mr-2">
                    <div className="font-sans text-base font-semibold cursor-pointer hover:underline" >{name}</div>
                    <div className="font-sans text-sm text-gray-400 cursor-pointer" >{role}</div>
                </div>
            </div>
        )
    }
    return(
        <></>
    )
}


