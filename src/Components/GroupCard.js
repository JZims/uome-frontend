import React from "react"
import BalancesGraph from "./BalancesGraph"

function GroupCard({name, groups}){

const individualGroups = groups.map((groupObj) => {

    return (<li>{groupObj.name}</li>)
})
    return (
    <ul>
        Group Card
        <h3>{name}</h3>
        <div>{individualGroups}</div>
        
        <BalancesGraph/>

    </ul>
    )
}

export default GroupCard