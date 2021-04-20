import React, {useState} from "react"

function NewEventForm({onAddNewEvent}){
const [eventName, setEventName] = useState("")
const [eventCost, setEventCost] = useState(0)
const [eventGroupId, setEventGroupId] = useState(0)

function handleSubmit(e) {
e.preventDefault()
const formData ={
eventName: eventName,
eventCost: parseFloat(eventCost),
eventGroupId: parseFloat(eventGroupId)
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
}


    return <div classname="new-event-form">
        <h3>Create New Event</h3>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Event Name..."
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="number"
          name="cost"
          placeholder="Cost of Event..."
          value={eventCost}
          onChange={(e) => setEventCost(e.target.value)}
        />

<input
          type="number"
          name="Group"
          placeholder="Group ID..."
          value={eventGroupId}
          onChange={(e) => setEventGroupId(e.target.value)}
        />
        <button type="submit">Add Event</button>
      </form>

    </div>
}

export default NewEventForm