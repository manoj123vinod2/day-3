import { Button, TextField ,TableContainer,TableCell,TableBody,Table,TableHead,TableRow} from '@mui/material'
import React, { useState } from 'react'

const Fourth = () => {
    var[Inputs,setInputs]=useState([]);
    var[data,setData]=useState([]);
const inputHandler=(e)=>{
    setInputs({...Inputs,[e.target.name]: e.target.value});
    console.log(Inputs)


};
const addHandler=()=>{
console.log("clicked")
setData((data)=>[...data,Inputs]);
console.log(data);
}


  return (
    <div >
        <h1>Details</h1>
      <TextField id="outlined-basic" label="Name" variant="outlined"  name="sname" onChange={inputHandler}/>&nbsp;
      <TextField id="outlined-basic" label="Age" variant="outlined"  name="sage" onChange={inputHandler}/><br></br> <br></br>&nbsp;
      <TextField id="outlined-basic" label=":Place" variant="outlined"  name="splace" onChange={inputHandler} />&nbsp;
      <TextField id="outlined-basic" label="Number" variant="outlined"  name="snumber" onChange={inputHandler}/><br></br>&nbsp;

      <Button color="inherit" variant="contained" onClick={addHandler}>go</Button>
<br/><br />

      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                    <TableCell>Number</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((val,i)=>{
                    return <TableRow key={i}>
                        <TableCell>{val.sname}</TableCell>
                        <TableCell>{val.sage}</TableCell>
                        <TableCell>{val.splace}</TableCell>
                        <TableCell>{val.snumber}</TableCell>
                        
                    </TableRow>
                })}
            </TableBody>
        </Table>
      </TableContainer>









    </div>
  )
}

export default Fourth
