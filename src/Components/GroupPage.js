import React, {useEffect, useState} from "react"
import GroupCard from "./GroupCard"
import NewEventForm from "./NewEventForm"
import CreateNewGroup from "./CreateNewGroup"

function GroupPage({loggedInUser, onAddNewEvent}){
    console.log(loggedInUser)
const [currentUserId, setCurrentUserId] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:4000/groups/${currentUserId}/events`)
        .then(r => r.json())
        .then(eventArray => console.log(eventArray),
        console.log(currentUserId)
        )
    },[] )

   

const groupCardArray = loggedInUser.groups.map((groupObj) => {



    return(
        <GroupCard 
        key={groupObj.id}
        name={groupObj.name}
        id={groupObj.id}
        setCurrentUserId={setCurrentUserId}
        
        />
    )
})
    return (
    <div>
        <h3>{loggedInUser.name}</h3>
        Groups Page
    <ul>
        {groupCardArray}
        
    </ul>
    
        <CreateNewGroup /> 
        <NewEventForm onAddNewEvent={onAddNewEvent} />
    
    </div>
    )
}
export default GroupPage