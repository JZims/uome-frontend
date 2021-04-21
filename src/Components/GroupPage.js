import React from "react"
import GroupCard from "./GroupCard"


function GroupPage({loggedInUser}){


const groupCardArray = loggedInUser.groups.map((groupObj) => {

    return(
        <GroupCard 
        key={groupObj.id}
        name={groupObj.name}
        id={groupObj.id}
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

    </div>
)
}
export default GroupPage