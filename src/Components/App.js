import React, { useState, useEffect } from "react"
import Login from "./Login"
import GroupsPage from "./GroupPage"
import CreateNewGroup from "./CreateNewGroup"

function App() {
const [groups, setGroups] = useState([])
const [userLogin, setUserLogin] = useState("")





function handleSubmit(e) {
  e.preventDefault()
  
  setUserLogin(e.target.value)
  console.log(userLogin)

  fetch(`http://localhost:3000/user?_embed=groups&name=${userLogin}`)
.then((r) => r.json())
.then(data => setGroups(data))


}

  return (
    <div className="App">
      <Login setLogin={setUserLogin}
      login={userLogin}
      onHandleSubmit={handleSubmit}/>
      
      
      <GroupsPage groups={groups} />
      <CreateNewGroup />
    </div>
  );
}

export default App;
