<<<<<<< HEAD

import React from "react"

=======
>>>>>>> 8bd4a6b018ac553a56f2a4b6d05ad7b8bed27c2d

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
<<<<<<< HEAD
        <button type="submit">Log In</button>
=======
        <Button type="submit">Log In</Button>
>>>>>>> 8bd4a6b018ac553a56f2a4b6d05ad7b8bed27c2d
        </form>
    </div>
    )
}
export default Login