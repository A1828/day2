import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

const First = () => {
  return (
    <div>
      <h1> Athira Anilkumar </h1>
      <input placeholder='username' />
      <br /><br />
      <input type="password" placeholder='password' />
      <br /><br />
      <button>Login</button>
      <br /><br /><br /><br />
      <Typography variant='h1'> Login page</Typography>
      <TextField variant='outlined' label='username'/>
      <TextField variant='filled'/>
      <TextField variant='standard'/>
      <br /><br />
      <Button variant='contained' color='secondary'>Login</Button>&nbsp;
      <Button variant='text' color='success'>Login</Button>&nbsp;
      <Button variant='outlined' color='error'>Login</Button>
    </div>
  );
}

export default First;
