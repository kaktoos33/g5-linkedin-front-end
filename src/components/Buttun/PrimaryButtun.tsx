import React from 'react'
import './Buttun.Style.scss'

export const PrimaryButtun = (props: { name: string, lang: string }) => {
    if (props.lang === "en") {
        return (
            <button className="primarybuttun en hover:text-white">
                {props.name}</button>
        )

    }
    else {
        return (
            <button className="primarybuttun hover:text-white">
                {props.name}</button>
        )

    }

}
