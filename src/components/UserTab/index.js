import React from "react"
import UserName from "../UserName"
import UserPic from "../UserPic"
import Separator from "../Separator"
import Stats from "../Stats"

const UserTab = () => {
    return (
        <div id="userProfileTab">
            <div class="container">
                <UserName />
                <Separator />
                <UserPic />
            </div>
            <Stats />
        </div>
    )
}

export default UserTab
