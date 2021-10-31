import React from 'react'
import { Card } from "./Card/Card";
import { User } from "../pages/Home/types/User.types";

interface FollowProps {
    followers: Array<User>;
}

export const Follow = ({ followers }: FollowProps) => {
    
    return (
        <div>
            <Card classname="follow" >
                <div className="flex justify-center">ارتباطات خود را گسترش دهید</div>
                <div>


                </div>
                <div></div>
            </Card>
        </div>
    )
}
