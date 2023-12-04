import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Mailer.css';
import { Paper } from '@mui/material';
import Button from "@mui/material/Button";
import { IoSend } from "react-icons/io5";



function MouseOver(event) {
  event.target.style.background = '#c97600';
}
function MouseOut(event){
  event.target.style.background="";
}

export default function BasicTextFields() {

  return (
    <>
    <Box sx={{width: "100%", height: {xs: '100px', md: '200px'}}}></Box>
    <Box
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        '& > :not(style)': { margin: 1, p:3, width: {xs: '350px', md: '450px' },
            height: 575, },}}
      noValidate
      autoComplete="off"
    >
    <Paper elevation={2} sx={{padding:{xs: '10px', md: '30px'}}}>
      
    
      <TextField fullWidth id="fullWidth" label="First Name" margin="normal" required />

      <TextField fullWidth id="fullWidth" label="Last Name" margin="normal" required />
    
  
      <TextField fullWidth id="fullWidth" label="Email" margin="normal" required />
     

      <TextField fullWidth label="Your Message" id="outlined-size-normal" margin="normal" multiline={true}
      rows={8} required/>

      <Button fullWidth sx={{height:'45px', backgroundColor: '#f0ad4e', marginTop: 'auto', fontSize: '17px', color:'white'}}
      onMouseOver={MouseOver}
      onMouseOut={MouseOut}
    >Send<IoSend /></Button>
    
 
    </Paper>
    </Box>
    </>
  );
}