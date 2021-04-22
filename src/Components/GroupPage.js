import React, {useState} from "react"
import GroupCard from "./GroupCard"


function GroupPage({loggedInUser}){

const [currentBalance, setCurrentBalance] = useState(0)


const groupCardArray = loggedInUser.groups.map((groupObj) => {

    return(
        <GroupCard 
        key={groupObj.id}
        name={groupObj.name}
        id={groupObj.id}
        setCurrentBalance={setCurrentBalance}
        />
    )
})



    return (
    <div>
        <h3>{loggedInUser.name}</h3>
        Total Balance: {parseInt(currentBalance)}
        <ul>
            
        {groupCardArray}
        
        </ul>

    </div>
)
}
export default GroupPage