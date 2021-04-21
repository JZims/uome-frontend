import React, {useState, useEffect} from "react"
// import BalancesGraph from "./BalancesGraph"
import NewEventForm from "./NewEventForm"



function GroupCard({name, id}){


const [listOfGroupEvents, setListOfGroupEvents] = useState([])

//non-state array to hold numbers that will be added together with .reduce method
const totalBalance = []

// function handleCheckBalance(){
//     setBalanceShowing(!balanceShowing)
    
// }

//Fetches group data with events attached according to the groups the users are associated with
useEffect(() => {
    fetch(`http://localhost:4000/groups/${id}/events`)
    .then((r) => r.json())
    .then(eventArr => setListOfGroupEvents(eventArr))
},[id] )






function handleNewEvent(newEvent){
    const updatedEventList = [...listOfGroupEvents, newEvent]
    setListOfGroupEvents(updatedEventList)
  }


function handleDeleteEvent(id){
    
    fetch(`http://localhost:4000/events/${id}`, {
        method:"DELETE", 
        headers: {
            "Content-Type": "application/JSON"
        }
    })
    const arrayAfterDelete = listOfGroupEvents.filter(eventObj => eventObj.id !== id)

    setListOfGroupEvents(arrayAfterDelete)

     
}


const arrayOfEvents = listOfGroupEvents.map((eventObj) => { 
    //attempting to take a total balance by adding each cost value
    //state will need to be held in GroupPage somehow
    totalBalance.push(eventObj.cost)
    return( 
    <div>
        <h5>Event: {eventObj.name}</h5>
        <p>Balance: ${eventObj.cost}</p>
        <button onClick={() => handleDeleteEvent(eventObj.id)}>Delete Event</button>
    </div>
    
)
})


console.log(totalBalance)

    return (
    <li>
        <h4>{name}</h4>
        {arrayOfEvents}
    
        {/* <button onClick={handleCheckBalance}>{balanceShowing ? "Hide Balance":"Check Balance"}</button>
         {balanceShowing ? <BalancesGraph events={listOfGroupEvents} /> : null} */}
          
        <NewEventForm groupName={name} onAddNewEvent={handleNewEvent} groupId={id} />
    </li>
    
    )



}
export default GroupCard
