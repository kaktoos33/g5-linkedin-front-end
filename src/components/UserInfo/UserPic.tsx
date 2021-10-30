import React from 'react'

export const UserPic = (props: {
    pic: any
}) => {
    return (
        <div > <img src={props.pic}
            className="border-none cursor-pointer rounded-2xl"
            alt="" /></div >
    )
}
