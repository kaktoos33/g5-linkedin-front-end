import React from 'react'

export const UserPic = (props: {
    pic: any;
    width:string;
    height:string;
}) => {
    return (
        <div> <img src={props.pic}
            className={`border-none cursor-pointer rounded-2xl ${props.width} ${props.height}`}
            alt="" /></div >
    )
}
