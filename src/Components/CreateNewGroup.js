import React, {useState} from "react"
import "../index.css"
import { Button, Input } from 'semantic-ui-react'
function CreateNewGroup({userId, setNewGroupObj}){


const [groupName, setGroupName] = useState("")

const newGroupData = {
    name: groupName, 
    userId: userId
}

function handleNewGroupSubmit(e){
e.preventDefault()

    fetch(`http://localhost:4000/groups`, {
        method:"POST", 
        headers: {
            "Content-Type": "application/JSON"
        }, 
        body: JSON.stringify(newGroupData)
    })
    .then(r => r.json())
    .then(newGroupObj => setNewGroupObj(newGroupObj))

    setGroupName("")
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
        <Button color='green'type="submit">Add "Friend"</Button>
        </form>
    </div>
)

}

export default CreateNewGroup