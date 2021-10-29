import { User } from '../../types/User.types';
import Usericon from '../../../../images/Usericon.svg'

export const Header = (props:
    {
        user: User;
        page: String;

    }) => {
    const { name, role, img } = props.user;
    if (props.page === "createpost") 
        return (
            <div className="mt-5 mr-7" >
                {img && <div ><img src={img}
                    className="border-none cursor-pointer rounded-2xl"
                    alt="" /></div>}
                {!img && <div><img src={Usericon}
                    className="border-none cursor-pointer rounded-2xl"
                    alt="" /></div>}
            </div>
        )
    
    if (props.page === "userpost") {
        return (
            <div className="flex mt-6 mb-4 mr-9">
                {img && <div ><img src={img}
                    className="border-none cursor-pointer rounded-2xl"
                    alt="" /></div>}
                {!img && <div><img src={Usericon}
                    className="border-none cursor-pointer rounded-2xl"
                    alt="" /></div>}
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


