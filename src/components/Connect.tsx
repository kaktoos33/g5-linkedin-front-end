import React, { useState } from 'react'
import { PrimaryButton } from '../pages/Login/components/Button/Button';
import { Card } from "./Card/Card";
import { User } from "./UserCard/types/User.types";
import { UserClass } from './UserCard/types/UserCalss.type';
import { UserCard } from "./UserCard/UserCard";
import { PrimaryButtun } from "./Buttun/PrimaryButtun";

interface ConnectProps {
    connecetlist: Array<User>;
}

const classname: UserClass = {
    nameclass: "connectname",
    roleclass: "connectrole",
    outerdivclass: "connectouterdivclass",
    innerdivclass: "connectinnerdivclass"
}

export const Connect = ({ connecetlist }: ConnectProps) => {
    const [readMore, setReadMore] = useState(false);

    const connect = React.useMemo(() => connecetlist.map((a) =>
        <div className="flex">
            <div className="w-2/3">
                <UserCard user={a} page="connect" calssnames={classname} />
            </div>

            <div className="w-1/3 pr-2">
                <PrimaryButtun name="Connect" type="submit" />
            </div>

        </div>), [connecetlist]);

    const linkName = "بیشتر" ? "کمتر" : "بیشتر"
    return (
        <div>
            <Card classname="connect" >
                <label className="flex justify-center mt-5 mb-6">ارتباطات خود را گسترش دهید</label>
                {connect}
                <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a> 
            </Card>
        </div>
    )
}
