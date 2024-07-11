import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

const Registration = () => {
  return (
    <div>
      <Typography variant='h3'> Registration Form</Typography>
      <TextField variant='outlined' label='Name'/>
      <br /><br />
      <TextField variant='outlined' color='secondary' label='Age'/>
      <br /><br />
      <TextField variant='standard' color='error' label='Place'/>
      <br /><br />
      <TextField variant='standard' color='success' label='Department'/>
      <br /><br />
      <TextField variant='standard' label='email'/>
      <br /><br />
      <TextField variant='filled' label='Password'/>
      <br /><br />
      <Button variant='contained' color='secondary' > Login</Button>


    </div>
  );
}

export default Registration;
