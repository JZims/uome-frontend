import React, {useState} from "react"
import "../index.css"
import { Button, Input } from 'semantic-ui-react'
function CreateNewGroup({userId, setNewGroupObj}){


const [groupName, setGroupName] = useState("")
const [number, setNumber] = useState("")

const newGroupData = {
    name: groupName, 
    userId: userId,
    number: number
}

function handleNewGroupSubmit(e){
e.preventDefault()

    fetch(`https://uome-backend.herokuapp.com/groups`, {
        method:"POST", 
        headers: {
            "Content-Type": "application/JSON"
        }, 
        body: JSON.stringify(newGroupData)
    })
    .then(r => r.json())
    .then(newGroupObj => setNewGroupObj(newGroupObj))

    setGroupName("")
    setNumber("")
}



return (
    <div>
        <h3>Add a new "friend"</h3>
        <form onSubmit={handleNewGroupSubmit}>
        <Input
          type="text"
          name={groupName}
          placeholder="Enter Name..."
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />

      <Input
          type="text"
          name={number}
          placeholder="Enter Phone Number..."
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <Button color='green'type="submit">Add "Friend"</Button>
        </form>
    </div>
)

}

export default CreateNewGroup