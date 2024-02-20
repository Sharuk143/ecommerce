import React from 'react'
import "./BlockStyle.css"

const RegistrationScreen = () => {
    return (

        <>
        <h1 style={{textAlign:"center"}}>Registration Page</h1>
        <div className='registerBlock'>

            <form className='form'>
                <label>User Name</label>
                <input type="text" />
                <label>Mobile no</label>
                <input type="text"/>
                <label>Email Id</label>
                <input type="email"/>
                <label>Password</label>
                <input type="password"/>
                <label>Confirm Password</label>
                <input type="password"/>
                <input type="submit" value="Sign In" style={{ backgroundColor: "red",color:"white" }} />
            </form>
        </div>

        </>
    )
}

export default RegistrationScreen
