import React, {useState, useEffect, useRef} from "react"
import NewEventForm from "./NewEventForm"
import "../index.css"
import {Card, Button, List,} from 'semantic-ui-react'

function GroupCard({name, id, loggedInUser, setAllGroups}){


const [totalOwed, setTotalOwed] = useState(0)
const [isAddFavorButtonShowing, setIsAddFavorButtonShowing] = useState(false)
const listOfGroupEvents = useRef()

//Fetches group data with events attached according to the groups the users they are associated with
useEffect(() => {
    fetch(`http://localhost:3000/groups/${id}?_embed=events`)
    // fetch(`https://uome-backend.herokuapp.com/groups/${id}/events`)
    .then((r) => r.json())
    .then(groupObj => {
       listOfGroupEvents.current = groupObj.events
        const totalBalance = groupObj.events.reduce((sum, eachEvent) => {
            return eachEvent.cost + sum
        },0)
        setTotalOwed(totalBalance)
    })
},[id, loggedInUser] )



function handleNewEvent(newEvent){
    const updatedEventList = [...listOfGroupEvents, newEvent]
    listOfGroupEvents.current = updatedEventList
    setTotalOwed(totalOwed => parseFloat(totalOwed += newEvent.cost))

    
  }


function handleDeleteEvent(id){
    
    fetch(`http://localhost:3000/events/${id}`, {
        method:"DELETE", 
        headers: {
            "Content-Type": "application/JSON"
        }
    })
    
    const arrayAfterDelete = listOfGroupEvents.current.filter(eventObj => eventObj.id !== id)

    listOfGroupEvents.current = arrayAfterDelete

    const deletedObj = listOfGroupEvents.find(eventObj => eventObj.id === id)
    const numberToSubtract = deletedObj.cost
    
    setTotalOwed(totalOwed - numberToSubtract)
    console.log(deletedObj)

    }
    
    


function handleDeleteGroup(id){

    fetch(`http://localhost:3000/groups/${id}`, {
        method: "DELETE", 
        headers: {
            "Content-Type": "application/json"
        } 
    }) 
    .then(
        setAllGroups(loggedInUser.groups.filter(obj => obj.id !== id))
        )

   

}

function handleAddFavorForm() {
    return(
        setIsAddFavorButtonShowing(!isAddFavorButtonShowing)
    )
}


const arrayOfEvents = listOfGroupEvents.current.map((eventObj) => { 

    return( 
    <List divided verticalAlign='middle' className="favors">
        <List.Content floated='left'>
            <List.Header><h3>Favor: {eventObj.name}</h3></List.Header>
            <p>Charge: ${eventObj.cost}</p>
        </List.Content>
        <List.Content floated='right'>
            <Button className="deleteButton" inverted color='red' onClick={() => handleDeleteEvent(eventObj.id)}>Forgive Debt</Button>
        </List.Content>
    </List>
    
)
})




    return (
    <Card fluid color="blue" className="card">
        <h2 className="nameOnCard">{name}</h2>
        <Card.Content fluid color="red">
        <h6>Total Owed: ${totalOwed} </h6>
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
