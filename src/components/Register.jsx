import { Box, TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
     
        <h2 style={{backgroundColor:"red"}}>Register page</h2>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Student Name"
          defaultValue=" Name"
        />
        <TextField
        
          id="outlined-disabled"
          label="Student Id"
          defaultValue="id"
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Address"
          defaultValue="Address"
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />
        </div>
        <div>
        <TextField
          id="outlined-number"
          label=" ph Number"
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
     
        <TextField
          id="outlined-helperText"
          label="Qualification"
          defaultValue="Qualification"
          helperText="Some important text"
        />
      </div>
  
    </Box>
  )
}

export default Register