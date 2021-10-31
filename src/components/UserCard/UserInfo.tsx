import React from 'react'

export const UserInfo = ( props:
    {
        name: string;
        role: string;
        nameclass?: string;
        roleclass?: string;
        innerdivclass? : string;

    }) => {
    return (
        <div className={`${props.innerdivclass} `}>
            <div className={`${props.nameclass} `}>{props.name}</div>
            <div className={`${props.roleclass} `}>{props.role}</div>
        </div>
    )
}
