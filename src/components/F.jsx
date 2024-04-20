import { Button, TextField, Typography  } from '@mui/material'
import React, { useState } from 'react'


const F = () => {var[input,setInput]=useState()
    var[b,setB]=useState()
    const inputHandler=(e)=>{
        //console.log(e.target.value)
        setInput(e.target.value)
    }
    const btnClicked=()=>{
        setB(input)
    }
    
  return (
    <div style={{margin:'10%'}}>
        
        <Typography variant='h3'>{b}</Typography>

<TextField id="outlined-basic" label="Text" variant="outlined" onChange={inputHandler}/>
<br></br>
<Button variant="contained"  onClick={btnClicked}>login</Button>

    </div>
  )
}

export default F
