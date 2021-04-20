import React from "react"


function BalancesGraph({events}){

    // console.log(events)

    const populateEventCard = events.map(eventObj => { 
    return( <ul>
    <li>Event: {eventObj.name}</li> 
    <li>Balance: {eventObj.cost}</li>
    </ul>
    )})

    return( 
    <div>   
    {populateEventCard}
    </div>
    )
}

export default BalancesGraph