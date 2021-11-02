import React, { ReactNode } from 'react'

export const CardContainer = (props: {
    children?: ReactNode | undefined;
}) => {
    return (
        <div className="flex justify-center">
            <div className="w-1/5 max-w-xs ">
                {props.children}
                {props.children}
            </div>
            <div className="w-3/5 max-w-xl mx-3.5">
                {props.children}
                {props.children}
                {props.children}
            </div>
            <div className="w-1/5 max-w-xs">
                {props.children}
            </div>
        </div>
    )
}

