import React from 'react'
import { PrimaryButtun } from '../Buttun/PrimaryButtun'
import { User } from '../UserCard/types/User.types'
import { UserClass } from '../UserCard/types/UserCalss.type'
import { UserCard } from '../UserCard/UserCard'

export const ConnectCard = ({ a, classname }: { a: User, classname: UserClass }) => {
    return (
        <div className="flex">
            <div className="w-2/3">
                <UserCard user={a} page="connect" calssnames={classname} />
            </div>

            <div className="w-1/3 pr-2">
                <PrimaryButtun name="Connect" type="submit" />
            </div>

        </div>
    )
}
