import React from 'react'
import { Card } from "../Card/Card";
import './UserProfile.style.scss'
import { UserCard } from "../UserCard/UserCard";
import { User } from '../UserCard/types/User.types';
import { UserClass } from '../UserCard/types/UserClass.type';
import { ReactComponent as VectorSvg } from "../../images/Vector.svg";

interface UserProfileProps {
    user: User;
    page: string;

}
const classname: UserClass = {
    nameclass: "profile_name",
    roleclass: "profile_role",
    outerdivclass: "",
    innerdivclass: ""
}


export const UserProfile = ({ user, page }: UserProfileProps) => {
    return (
        <Card classname="userInfo" >

            <div className="mt-9">
                <UserCard user={user} page={page} calssnames={classname} />
            </div>
            <div className="flex justify-center ">
                <div className="flex items-center justify-center w-1/5 container_vector">
                    <VectorSvg id="vector_svg" className="w-3.5 h-3.5" />
                </div>
            </div>
            <div className="flex items-end justify-center mb-4">
                <a className="logout hover:underline" href="#" >logout</a>
            </div>


        </Card>
    )
}

