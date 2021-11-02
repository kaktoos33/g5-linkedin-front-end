import React from 'react'
import { PrimaryButtun } from '../Buttun/PrimaryButtun'
import { User } from '../UserCard/types/User.types'
import { UserClass } from '../UserCard/types/UserCalss.type'
import { UserCard } from '../UserCard/UserCard'

export const ConnectCard = ({ req, classname }: { req: User, classname: UserClass }) => {
    return (
        <div className="flex">
            <div className="w-2/3">
                <UserCard user={req} page="connect" calssnames={classname} />
            </div>

            <div dir="ltr" className="w-1/3 connect_innerdiv_class">
                <PrimaryButtun name="Connect" type="submit" />
            </div>

        </div>
    )
}
