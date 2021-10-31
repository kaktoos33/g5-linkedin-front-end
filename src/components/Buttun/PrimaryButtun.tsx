import React from 'react'
import './Buttun.Style.scss'

export const PrimaryButtun = (props : {name: string , type: string}) => {
    return (
        <button className="primarybuttun hover:text-white">
            {props.name}</button>
    )
}
