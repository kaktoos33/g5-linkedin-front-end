import React from 'react'
import { Button } from '../Buttun/Button'
import { User } from '../UserCard/types/User.types'
import { UserCard } from '../UserCard/UserCard'

export const FollowCard = ({ req, butname }: { req: User, butname: string }) => {
   
    return (
        <div className="flex">
            <div className="w-2/3">
                <UserCard user={req} componentname="Connect" image_size="S"  />
            </div>

            <div dir="ltr" className="w-1/3 connect_innerdiv_class">
            <Button type="button" gruop="Primary" lang="en" size="M" >Connect</Button>
                {butname === "Accept" && <label className="ignore-label">Ignore</label>}
            </div>

        </div>
    )
}
