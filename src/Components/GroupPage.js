import React, {useState, useEffect} from "react"
import StappyHour from "./StappyHour"
import GroupCard from "./GroupCard"
import CreateNewGroup from "./CreateNewGroup"
import "../index.css"
import {Container} from "semantic-ui-react"
import { Route, Switch} from "react-router-dom"
import NavBar from "./NavBar"



function GroupPage({loggedInUser}){


const [allGroups, setAllGroups] = useState(loggedInUser.groups)
// const [groupDeleteId, setGroupDeleteId] = useState(0)



// const userArrayAfterGroupAdd = [...allGroups, newGroupObj]

// const userArrayAfterGroupDelete = userArrayAfterGroupAdd.filter(groupObj => groupObj.id !== groupDeleteId)

// const filterArrayForEmptyObj = userArrayAfterGroupDelete.filter(groupObj => {
//     if(groupObj.name)
//         return true 
//     else return false
// })

console.log(allGroups)

   

   const groupCardArray =  allGroups.map((groupObj) => {

        return(
            <GroupCard 
            key={groupObj.id}
            name={groupObj.name} 
            id={groupObj.id}
            loggedInUser = {loggedInUser}
            setAllGroups = {setAllGroups}
            />
        )
    })



// console.log(userArrayAfterGroupDelete)

// useEffect(() => {
//     userArrayAfterGroupDelete.map((groupObj) => {

//         return(
//             <GroupCard 
//             key={groupObj.id}
//             name={groupObj.name}
//             id={groupObj.id}
//             setGroupDeleteId={setGroupDeleteId}
//             />
//         )
//     })
// }, [groupDeleteId]) 



    return (
    <div className='groupPage'>
    
        <Switch>
            <Route exact path="/">
            <h3>Hey, {loggedInUser.name}! Time to get that bread!</h3>
            <h2 className="pageHeader">Enemies List</h2>
            <ul className='groupPage'>
            <Container >
                {groupCardArray}
            </Container>
            </ul>
            </Route>
            <Route exact path="/bored">
                <StappyHour/>
            </Route>
            <Route exact path="/addNew">
                {/* <CreateNewGroup userId={loggedInUser.id} setNewGroupObj= {setNewGroupObj}/> */}
            </Route>
        </Switch>
        <NavBar/>
        {/* <Link to={"/"}>List of Dirtbags</Link>
        <br></br>
        <Link to={"/addNew"}>Add a new Dirtbag</Link>
        <br></br>
        <Link to={"/bored"}>This is Boring.</Link>
        */}
        
        

    </div>
)
}
export default GroupPage