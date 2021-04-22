import React from "react"
import {Button} from "semantic-ui-react"
import "../index.css"
function Login({login, setLogin, onHandleSubmit}){

    return( 
    <div style={{textAlign: "Center"}} >

        <h1>Login Please!</h1>
        <form onSubmit={onHandleSubmit}>
        <input onChange={(e) => setLogin(e.target.value)} 
            value={login} 
            type="text" 
            placeholder="Or don't. Whatever..."/>
        <Button type="submit">Log In</Button>
        </form>
    </div>
    )
}
export default Login