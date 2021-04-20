import React, {useState, useEffect} from "react"
import BalancesGraph from "./BalancesGraph"



function GroupCard({name, id, setCurrentUserId}){

const [balanceShowing, setBalanceShowing] = useState(false)
const [listOfGroupEvents, setListOfGroupEvents] = useState([])

setCurrentUserId(id)



function handleCheckBalance(){
    
    setBalanceShowing(!balanceShowing)
    
}

// useEffect(() => {
//     fetch(`http://localhost:4000/groups/${id}/events`)
//     .then(r => r.json())
//     .then(eventArray => console.log(eventArray)
//     )
// },[id] )



    return (
    <li>
    <h4>{name}</h4>
    {listOfGroupEvents}
    {/* <button onClick={handleCheckBalance}>{balanceShowing ? "Hide Balance":"Check Balance"}</button>
    {balanceShowing ? <BalancesGraph events={listOfGroupEvents} /> : null} */}
    </li>
    
    )



}
export default GroupCard
