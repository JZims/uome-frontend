import React, {useState, useEffect} from "react"
import NewEventForm from "./NewEventForm"
import "../index.css"
import {Card, Button, List, Input} from 'semantic-ui-react'

function GroupCard({name, id, setCurrentBalance, setGroupDeleteId}){



const [listOfGroupEvents, setListOfGroupEvents] = useState([])
const [isAddFavorButtonShowing, setIsAddFavorButtonShowing] = useState(false)


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
    <List divided verticalAlign='middle' className="favors">
        <List.Content floated='left'>
        
        <List.Header><h3>Favor: {eventObj.name}</h3></List.Header>
       
        <p>Balance: ${eventObj.cost}</p>
        </List.Content>
        <List.Content floated='right'>
        <Button className="deleteButton" inverted color='red' onClick={() => handleDeleteEvent(eventObj.id)}>Forgive Debt</Button>
        </List.Content>
    </List>
    
)
})

function handleAddFavorForm() {
    return(
        setIsAddFavorButtonShowing(!isAddFavorButtonShowing)
    )
}
const totalBalance = arrayOfEvents.reduce((sum, eachEvent) => {
    return eachEvent.cost + sum
},0)


    return (
    <Card fluid color="blue" className="card">
        <h2 className="nameOnCard">{name}</h2>
        <Card.Content fluid color="red">
        {arrayOfEvents} 
        </Card.Content>
        <Button toggle onClick={handleAddFavorForm}>Add favor</Button>
        {isAddFavorButtonShowing ? (<NewEventForm groupName={name} onAddNewEvent={handleNewEvent} groupId={id} />) : 
        null}
         <Button color='red 'type="submit" onClick={() => handleDeleteGroup(id)}>Forgive All Debts for {name}</Button>
    </Card>
    )
}

export default GroupCard
