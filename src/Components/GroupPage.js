import React from "react"
import GroupCard from "./GroupCard"
import NewEventForm from "./NewEventForm"
import CreateNewGroup from "./CreateNewGroup"

function GroupPage({groups}){
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
        <CreateNewGroup /> 
        <NewEventForm />
        
    
    </div>
    )
}
export default GroupPage