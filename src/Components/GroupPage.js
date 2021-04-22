import React, {useState} from "react"
import StappyHour from "./StappyHour"
import GroupCard from "./GroupCard"
import CreateNewGroup from "./CreateNewGroup"
import "../index.css"
import {Card} from "semantic-ui-react"
import {Link, Route, Switch} from "react-router-dom"


function GroupPage({loggedInUser}){

const [currentBalance, setCurrentBalance] = useState(0)
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
        setCurrentBalance={setCurrentBalance}
        setGroupDeleteId={setGroupDeleteId}
        />
    )
})


    return (
    <div>
    
        <h3>Hello {loggedInUser.name}! These are all the dirtbags who owe you money!</h3>
        
        <Switch>
            <Route exact path="/">
            <h2 className="pageHeader">Enemies List</h2>
            Total Balance: {parseInt(currentBalance)}
            <ul>
            <Card.Group>
            
                {groupCardArray}
        </Card.Group>
            </ul>
            </Route>
            <Route exact path="/bored">
                <StappyHour/>
            </Route>
            <Route path="/createnew">
                <CreateNewGroup userId={loggedInUser.id} setNewGroupObj= {setNewGroupObj}/>
            </Route>
        </Switch>

        <Link to={"/"}>List of dirtbags</Link>
        <br></br>
        <Link to={"/createNew"}>Add a new subject</Link>
        <br></br>
        <Link to={"/bored"}>This is Boring.</Link>
        
        

    </div>
)
}
export default GroupPage