import React, {useState, useEffect} from "react"
import { Button, Input } from 'semantic-ui-react'
import NewEventForm from "./NewEventForm"
import "../index.css"


function GroupCard({name, id, setCurrentBalance, setGroupDeleteId}){



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

function handleDeleteGroup(id){

    setGroupDeleteId(id)

    fetch(`http://localhost:4000/groups/${id}`, {
        method: "DELETE", 
        headers: {
            "Content-Type": "application/json"
        } 
    })

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

const totalBalance = arrayOfEvents.reduce((sum, eachEvent) => {
    return eachEvent.cost + sum
},0)

console.log(totalBalance)


    return (
    <li className="card">
        <h4>{name}</h4>
        <h6>Total Owed:</h6>
        {arrayOfEvents}    
        <NewEventForm groupName={name} onAddNewEvent={handleNewEvent} groupId={id} />
        <Button color='red 'type="submit" onClick={() => handleDeleteGroup(id)}>Forgive All Debts for {name}</Button>
    </li>
    
    )



}
export default GroupCard
