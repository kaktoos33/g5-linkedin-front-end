import React, { useState } from 'react'
import { Card } from "../Card/Card";
import { User } from "../UserCard/types/User.types";
import { UserClass } from '../UserCard/types/UserCalss.type';
import { SeeMore } from "../MoreLink/SeeMore";
import { ConnectCard } from "./ConnectCard";
import '../Responsive.Style.scss';

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

    const connect = React.useMemo(() => connecetlist.slice(0, 3).map((a) =>

        <ConnectCard a={a} classname={classname} />), [connecetlist]);

    const extraConnect = React.useMemo(() => connecetlist.slice(3, 6).map((a) =>
        <ConnectCard a={a} classname={classname} />), [connecetlist]);

    const linkName = readMore ? "کمتر" : "بیشتر"

    const onclick = () => { setReadMore(!readMore) }
    return (
        <div className="overflow-hidden">
            <Card classname="connect" >
                <div>
                    <label className="flex justify-center mt-5 mb-6">ارتباطات خود را گسترش دهید</label>
                </div>

                {connect}

                {readMore && extraConnect}
                <SeeMore linkName={linkName} onclick={onclick} />
            </Card>
        </div>

    )
}
