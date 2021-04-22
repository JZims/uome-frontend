import React, {useState, useEffect} from "react"
// import BalancesGraph from "./BalancesGraph"
import NewEventForm from "./NewEventForm"
import "../index.css"


function GroupCard({name, id, setCurrentBalance}){


const [listOfGroupEvents, setListOfGroupEvents] = useState([])


//Fetches group data with events attached according to the groups the users they are associated with
useEffect(() => {
    fetch(`http://localhost:4000/groups/${id}/events`)
    .then((r) => r.json())
    .then(eventArr => {
        setListOfGroupEvents(eventArr)
        const totalBalance = eventArr.reduce((sum, eachEvent) => {
            return eachEvent.cost + sum
        },0)
        setCurrentBalance(totalBalance)
    })
},[id] )






function handleNewEvent(newEvent){
    const updatedEventList = [...listOfGroupEvents, newEvent]
    setListOfGroupEvents(updatedEventList)

    const totalBalance = updatedEventList.reduce((sum, eachEvent) => {
        return eachEvent.cost + sum
    },0)
    setCurrentBalance(totalBalance)
  }


function handleDeleteEvent(id){
    
    fetch(`http://localhost:4000/events/${id}`, {
        method:"DELETE", 
        headers: {
            "Content-Type": "application/JSON"
        }
    })
    const arrayAfterDelete = listOfGroupEvents.filter(eventObj => eventObj.id !== id)

    const totalBalance = arrayAfterDelete.reduce((sum, eachEvent) => {
        return eachEvent.cost + sum
    },0)

    setListOfGroupEvents(arrayAfterDelete)
    setCurrentBalance(totalBalance)


}


const arrayOfEvents = listOfGroupEvents.map((eventObj) => { 
    
    return( 
    <div>
        <h5>Event: {eventObj.name}</h5>
        <p>Balance: ${eventObj.cost}</p>
        <button onClick={() => handleDeleteEvent(eventObj.id)}>Delete Event</button>
    </div>
    
)
})



    return (
    <li className="card">
        <h4>{name}</h4>
        {arrayOfEvents}    
        <NewEventForm groupName={name} onAddNewEvent={handleNewEvent} groupId={id} />
    </li>
    
    )



}
export default GroupCard
