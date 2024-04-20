import { Box ,AppBar ,Toolbar  ,Typography ,Button} from "@mui/material";
import React from 'react'
import { Link } from "react-router-dom";

const S = () => {
  return (
    <div
    >
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6"  style={{ textAlign:"left"}} component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" variant="contained"><Link to='/'>Login</Link></Button>
          <Button color="inherit" variant="contained"><Link to='/s'>sign</Link></Button>
          <Button color="inherit" variant="contained"><Link to='/t'>hy</Link></Button>


        </Toolbar>
      </AppBar>
    </Box>
      
    </div>
  )
}

export default S
