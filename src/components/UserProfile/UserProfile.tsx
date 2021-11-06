import React from 'react'
import { Card } from "../Card/Card";
import './UserProfile.style.scss'
import { UserCard } from "../UserCard/UserCard";
import { User } from '../UserCard/types/User.types';
import { ReactComponent as VectorSvg } from "../../images/Vector.svg";

interface UserProfileProps {
    user: User;

}

export const UserProfile = ({ user }: UserProfileProps) => {
    return (
        <Card classname="userInfo" >

            <div className="mt-12">
                <UserCard user={user} componentname="Profile" image_size="L" />
            </div>
            <div className="flex justify-center ">
                <div className="flex items-center justify-center w-3.5 h-3.5 container_vector">
                    <VectorSvg id="vector_svg" className="w-full h-full" />
                </div>
            </div>
            <div className="flex items-end justify-center mb-4">
                <a href=" " className="logout hover:underline" >logout</a>
            </div>


        </Card>
    )
}

