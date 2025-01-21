import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h1 style={{backgroundColor:"yellow"}}>Login page</h1>
        <TextField id="standard-basic" label="UserName" variant="outlined"/><br></br>
        <TextField id="standard-basic" label="Password" variant="outlined" /><br></br>
        <Button variant="contained">Login</Button>
       
    </div>
  )
}

export default Login