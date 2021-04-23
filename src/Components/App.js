import React, { useState } from "react"
import Login from "./Login"
import GroupsPage from "./GroupPage"
import HeaderOfPage from "./Header"
import "../index.css"
import NavBar from "./NavBar"




function App() {

const [loggedInUser, setLoggedInUser] = useState(null)
const [userLogin, setUserLogin] = useState("")
const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)





function handleSubmit(e) {

  e.preventDefault()
  setUserLogin(e.target.value)


//Fetches User data embeded with the groups they are in 
fetch(`http://localhost:4000/user?_embed=groups&name=${userLogin}`)
.then((r) => r.json())
.then(userArray => setLoggedInUser(userArray[0]))

setIsUserLoggedIn(!isUserLoggedIn)

}




  return (
    <div className="App">
      <HeaderOfPage  />
       {loggedInUser ? 
        <>
        <GroupsPage className= "groupPage" loggedInUser={loggedInUser}/> 
        <NavBar />
        </>
        : 
        <Login setLogin={setUserLogin}
        login={userLogin}
        onHandleSubmit={handleSubmit}/>
        } 
      
    </div>
  );
}
export default App;