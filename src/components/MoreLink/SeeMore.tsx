import React from 'react'

export const SeeMore = ({ linkName, onclick }: { linkName: string, onclick: () => void }) => {
    return (
        <div className="flex justify-center py-4 border-t">
            <a className="seemore" onClick={onclick}>{linkName}</a>
        </div>
    )
}