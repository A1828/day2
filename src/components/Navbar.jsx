import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Button>
git             <Link to={"/"}style={{textDecoration:"none",color:"white"}}>Login
             </Link>
             </Button>
             <Button>
             <Link to={"/reg"}style={{textDecoration:"none",color:"white"}}>registration
             </Link>
             </Button>
             <Button>
             <Link to={"/t"}style={{textDecoration:"none",color:"white"}}>Tabs
             </Link>
             </Button>
             <Button>
             <Link to={"/"}style={{textDecoration:"none",color:"white"}}>Logout
             </Link>
             </Button>
             <Button>
             <Link to={"/s"}style={{textDecoration:"none",color:"white"}}>State
             </Link>
             </Button>
             <Button>
             <Link to={"/c"}style={{textDecoration:"none",color:"white"}}>Counter
             </Link>
             </Button>
             <Button>
             <Link to={"/h"}style={{textDecoration:"none",color:"white"}}>Home
             </Link>
             </Button>
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  );
}

export default Navbar;
