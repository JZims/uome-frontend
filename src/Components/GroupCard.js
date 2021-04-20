import React, {useState, useEffect} from "react"
import BalancesGraph from "./BalancesGraph"
import NewEventForm from "./NewEventForm"



function GroupCard({name, id}){

const [balanceShowing, setBalanceShowing] = useState(false)
const [listOfGroupEvents, setListOfGroupEvents] = useState([])
// const [updatedEventArray, setUpdatedEventArray] = useState([])



function handleCheckBalance(){
    setBalanceShowing(!balanceShowing)
    
}

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
     
}

function removeEvent(event){
    console.log(event)
    
    const arrayAfterDelete = listOfGroupEvents.filter(eventObj => eventObj.id !== event)

    setListOfGroupEvents(arrayAfterDelete)

}


const arrayOfEvents = listOfGroupEvents.map((eventObj) => { 
    return( 
    <div>
        <p>Event: {eventObj.name}</p>
        <p>Balance: {eventObj.cost}</p>
        <button  onClick={() => { removeEvent(eventObj.id); handleDeleteEvent(eventObj.id)}}>Delete Event</button>
    </div>

)
})


    return (
    <li>
        <h4>{name}</h4>
        {arrayOfEvents}
    
        <button onClick={handleCheckBalance}>{balanceShowing ? "Hide Balance":"Check Balance"}</button>
         {/* {balanceShowing ? <BalancesGraph events={listOfGroupEvents} /> : null} */}
          
        <NewEventForm onAddNewEvent={handleNewEvent} groupId={id} />
    </li>
    
    )



}
export default GroupCard
