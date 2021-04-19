import React from "react"
import GroupCard from "./GroupCard"
import NewEventForm from "./NewEventForm"


function GroupsPage({groups}){

const individualUser = groups.map((userObj) => {
    return(
        <GroupCard 
        key={userObj.id}
        name={userObj.name}
        groups={userObj.groups}
        />
    )
})

    return (
    

    <div>
        Groups Page
        {individualUser}
        <NewEventForm />
    </div>
    )
}

export default GroupsPage