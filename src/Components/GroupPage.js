import React from "react"
import GroupCard from "./GroupCard"
import "../index.css"

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
        <h3>Hello {loggedInUser.name}! These are all the dirtbags who owe you money!</h3>
        <h2 className="pageHeader">Enemies List</h2>
        <ul>
            
        {groupCardArray}
        
        </ul>

    </div>
)
}
export default GroupPage