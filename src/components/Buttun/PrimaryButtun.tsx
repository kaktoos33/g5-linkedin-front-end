import React from 'react'
import './Buttun.style.scss'

export const PrimaryButtun = (props: { name: string, lang: string }) => {
    if (props.lang === "en") {
        return (
            <button type="submit" className="primarybuttun en hover:text-white">
                {props.name}</button>
        )

    }
    else {
        return (
            <button type="submit" className="primarybuttun hover:text-white">
                {props.name}</button>
        )

    }

}
