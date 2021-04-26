import React, {useState} from "react"
import StappyHour from "./StappyHour"
import GroupCard from "./GroupCard"
import CreateNewGroup from "./CreateNewGroup"
import "../index.css"
import {Container} from "semantic-ui-react"
import { Route, Switch} from "react-router-dom"
import NavBar from "./NavBar"



function GroupPage({loggedInUser}){


const [newGroupObj, setNewGroupObj] = useState({})
const [groupDeleteId, setGroupDeleteId] = useState(0)


const userArrayAfterGroupAdd = [...loggedInUser.groups, newGroupObj]


const filterArrayForEmptyObj = userArrayAfterGroupAdd.filter(groupObj => {
    if(groupObj.name)
        return true 
})

const userArrayAfterGroupDelete = filterArrayForEmptyObj.filter(groupObj => groupObj.id !== groupDeleteId)


console.log(userArrayAfterGroupDelete)

const groupCardArray = userArrayAfterGroupDelete.map((groupObj) => {

    return(
        <GroupCard 
        key={groupObj.id}
        name={groupObj.name}
        id={groupObj.id}
        setGroupDeleteId={setGroupDeleteId}
        />
    )
})


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
                <CreateNewGroup userId={loggedInUser.id} setNewGroupObj= {setNewGroupObj}/>
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