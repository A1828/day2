import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';

const Home=() =>{

  var[name,setName]=useState();
  const changeName=()=>{
    setName("Home");
  };
  const changeGallery=()=>{
    setName("Gallery");
  };
  const changeContact=()=>{
    setName("Contact");
  };

  return (
    <div style={{textAlign:'center',marginTop:'5%'}}>
      <Typography variant='h3'> Welcome To {name}</Typography>
      <br /><br /><br /><br />
      <Button variant='contained' color='secondary'  onClick={changeName}>Home </Button>&nbsp;&nbsp;
      <Button variant='contained' color='primary' onClick={changeGallery}>  Gallery</Button>&nbsp;&nbsp;
      <Button variant='contained' color='error'  onClick={changeContact}> contact</Button>



      
    </div >
  );
}

export default Home;
