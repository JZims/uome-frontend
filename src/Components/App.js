import React, { useState } from "react"
import Login from "./Login"
import GroupsPage from "./GroupPage"


function App() {

const [groups, setGroups] = useState([])
const [userLogin, setUserLogin] = useState("")
const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)





function handleSubmit(e) {

  e.preventDefault()
  setUserLogin(e.target.value)



fetch(`http://localhost:4000/user?_embed=groups&name=${userLogin}`)
.then((r) => r.json())
.then(data => setGroups(data))

setIsUserLoggedIn(!isUserLoggedIn)

}


  return (
    <div className="App">

      {isUserLoggedIn ? 
        <GroupsPage groups={groups}/> : 
        <Login setLogin={setUserLogin}
        login={userLogin}
        onHandleSubmit={handleSubmit}/>
      }
      
      
    </div>
  );
}
export default App;
