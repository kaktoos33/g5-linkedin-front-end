import React, { useState } from 'react'
import { Tag } from '../../components/Tag/Tag.types'
import { Tags } from '../../components/Tag/Tags'
import { User } from '../../components/UserCard/types/User.types'
import { UserProfile } from '../../components/UserProfile/UserProfile'
import "../Home/Home.style.scss"
import { FollowReq } from "../../components/FollowReq/FollowReq";
import { UserClass } from '../../components/UserCard/types/UserClass.type'
import '../../components/FollowReq/Follow.style.scss'

interface FollowReqProps {
    connecetlist: Array<User>;
}

const classname: UserClass = {
    nameclass: "connect_name",
    roleclass: "connect_role",
    outerdivclass: "connect_outerdiv_class",
    innerdivclass: "connect_innerdiv_class"
}

const fetechedUser: User =
{
    name: "farzaneh",
    role: "Developer",
    img: "https://picsum.photos/id/1005/40"
}

const fetechedTag: Array<Tag> = [
    { name: "work" }, { name: "business" }, { name: "hr" }, { name: "userinterface" }, { name: "digital" }, { name: "userexperience" }, { name: "ux" }, { name: "ui" }, { name: "freelance" }
]

const fetechedConnectsug: Array<User> = [
    {
        name: "AmirBahador",
        role: "Devops",
        img: "https://picsum.photos/id/2/40"
    },
    {
        name: "Mehdi",
        role: "FrontEnd Developer",
        img: ""
    },
    {
        name: "Sina",
        role: "BackEnd Developer",
        img: "https://picsum.photos/id/175/40"
    },
    {
        name: "Mehrdad",
        role: "SEO",
        img: "https://picsum.photos/id/250/40"
    },
    {
        name: "Neda",
        role: "Manager",
        img: ""
    },
    {
        name: "Mahour",
        role: "UI/UX Designer",
        img: "https://picsum.photos/id/1014/40"
    }

]

const fetechedfollowReq: Array<User> = [
    {
        name: "Navid",
        role: "Devops",
        img: "https://picsum.photos/id/319/40"
    },
    {
        name: "Sara",
        role: "FrontEnd Developer",
        img: "https://picsum.photos/id/342/40"
    },
    {
        name: "Mari",
        role: "BackEnd Developer",
        img: "https://picsum.photos/id/177/40"
    },
    {
        name: "Mohammad",
        role: "SEO",
        img: "https://picsum.photos/id/180/40"
    },
    {
        name: "Omid",
        role: "Manager",
        img: "https://picsum.photos/id/20/40"
    },
    {
        name: "Sahar",
        role: "UI/UX Designer",
        img: "https://picsum.photos/id/30/40"
    }

]

export const Follow = () => {
    const user = fetechedUser;
    return (
        <div className="flex justify-center h-full main">
            <div id="right" className="w-1/5 max-w-xs ">
                <UserProfile user={user} page="userprofile" />
            </div>
            <div id="center" className="w-3/5 max-w-xl mx-3.5 mt-9">
            <FollowReq connecetlist={fetechedfollowReq} title="دعوت ها" type="follow" butname="Accept" />
             <FollowReq connecetlist={fetechedConnectsug} title="ارتباطات خود را گسترش دهید" type="follow" butname="Connect"/>   
            </div>
            <div id="left" className="w-1/5 max-w-xs">
                <Tags Taglist={fetechedTag} />
            </div>
        </div>
    )
}
