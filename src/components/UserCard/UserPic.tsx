import React from 'react'

export const UserPic = (props: {
    pic: any
}) => {
    return (
        <div> <img src={props.pic}
            className="w-10 h-10 border-none cursor-pointer rounded-2xl"
            alt="" /></div >
    )
}
