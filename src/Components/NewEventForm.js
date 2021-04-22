import React, {useState} from "react"

function NewEventForm({onAddNewEvent, groupId, groupName}){
const [eventName, setEventName] = useState("")
const [eventCost, setEventCost] = useState(null)


function handleSubmit(e) {
e.preventDefault()


const formData ={
name: eventName,
cost: +parseFloat(eventCost).toFixed(2),
groupId: parseInt(groupId)

}

if(!formData.name){
    return alert("Wot. Add a name, ya nerd.")
} else if (isNaN(formData.cost)){
    return alert("Consider ALL the costs, please.")
}

fetch("http://localhost:4000/events", {
method: "POST",
headers: {
    "Content-Type": "application/json"
},
body: JSON.stringify(formData)

})

.then((r) => r.json())
.then((newEvent) => {

    onAddNewEvent(newEvent)
})

setEventCost(e.target.placeholder)
setEventName("")
}


    return <div classname="new-event-form">
        <h6>Create New Event for {groupName}</h6>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name={eventName}
          placeholder="Enter Event Name..."
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="number"
          step=".50"
          min="0.00"
          name={+parseFloat(eventCost).toFixed(2)}
          placeholder="Cost of Event (in dollars)..."
          value={+parseFloat(eventCost).toFixed(2)}
          onChange={(e) => setEventCost(+parseFloat(e.target.value).toFixed(2))}
        />

        <button type="submit">Add Event</button>
      </form>

    </div>
}

export default NewEventForm