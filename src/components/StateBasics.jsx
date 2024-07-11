import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[name, setName]=useState("Athira");
    var[input,setInput]=useState();
    const changeName =()=>{
        console.log("btn clicked");
        setName(input)

    }
     const inputHandler=(e)=>{
        console.log(e.target.value)
        setInput(e.target.value);
     }
  return (
    <div style={{textAlign:'center',marginTop:'5%'}}>
      <Typography variant='h3'> Hello {name}</Typography>
      <TextField variant='outlined' label='enter your name' onChange={inputHandler}/>
      <br /><br />
      <Button variant='contained' onClick ={changeName}>change</Button>
      <br /><br />
    </div>
  );
}

export default StateBasics;

