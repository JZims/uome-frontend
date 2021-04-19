import React from "react"

function Login({login, setLogin, onHandleSubmit}){


    return <div>
        <h1>Login Please!</h1>
        <form onSubmit={onHandleSubmit}>
        <input onChange={(e) => setLogin(e.target.value)} value={login} type="text" placeholder="Enter Username..."></input>
        <button type="submit">SUBMIT</button>
        </form>


    </div>

}

export default Login