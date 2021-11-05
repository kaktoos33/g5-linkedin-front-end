import React, { useState } from 'react'
import { Card } from "../Card/Card";
import { User } from "../UserCard/types/User.types";
import { UserClass } from '../UserCard/types/UserClass.type';
import { SeeMore } from "../MoreLink/SeeMore";
import { FollowCard } from "./FollowCard";
import '../Responsive.Style.scss';
import './Follow.style.scss'

interface ConnectProps {
    connecetlist: Array<User>;
    title:string;
    type:string;
    butname:string;
}



export const FollowReq = ({ connecetlist , title , type , butname }: ConnectProps) => {
    const [readMore, setReadMore] = useState(false);

    const classname: UserClass = {
        nameclass: `${type}_name`,
        roleclass: `${type}_role`,
        outerdivclass: `${type}_outerdiv_class`,
        innerdivclass: `${type}_innerdiv_class`
    }
    
    const connect = React.useMemo(() => connecetlist.slice(0, 3).map((req , index) =>

        <FollowCard req={req} key={index.toString()} classname={classname} page={type} butname={butname}  />), [connecetlist]);

    const extraConnect = React.useMemo(() => connecetlist.slice(3, 6).map((req , index) =>
        <FollowCard req={req} key={index.toString()} classname={classname} page={type} butname={butname} />), [connecetlist]);

    const linkName = readMore ? "کمتر" : "بیشتر"

    const onclick = () => { setReadMore(!readMore) }
    return (
        <div className="overflow-hidden">
            <Card classname={`${type}`} >
                <div className={`flex mb-6 ${type}-title`}>
                    {title}
                </div>

                {connect}

                {readMore && extraConnect}
                
                <SeeMore linkName={linkName} onclick={onclick} />
            </Card>
        </div>

    )
}
