import React, {useState, useEffect} from "react"
import BalancesGraph from "./BalancesGraph"



function GroupCard({name, groups}){

const [balanceShowing, setBalanceShowing] = useState(false)
const [selectedGroupName, setSelectedGroupName] = useState("")
const [listOfGroupEvents, setListOfGroupEvents] = useState([])


function handleCheckBalance(event){
    
    setSelectedGroupName((selectedGroupName) => selectedGroupName = event.target.name)
    setBalanceShowing(!balanceShowing)
    
}

useEffect(() => {
    fetch(`http://localhost:4000/groups?_embed=events&name=${selectedGroupName}`)
    .then(r => r.json())
    .then(data => data.map(each => {
       setListOfGroupEvents(each.events)
    })
    )
},[selectedGroupName] )




const individualGroups = groups.map((groupObj) => {
    return (
    <li>
    <h4>{groupObj.name}</h4>
    <button name={groupObj.name} onClick={handleCheckBalance}>{balanceShowing ? "Hide Balance":"Check Balance"}</button>
    {balanceShowing ? <BalancesGraph events={listOfGroupEvents} /> : null}
    </li>
    
    )
})


    return (
    <ul>
        Group Card
        <h3>{name}</h3>
        {individualGroups}
    
    </ul>
    )
}
export default GroupCard
