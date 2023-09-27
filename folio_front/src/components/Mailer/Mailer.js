import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Mailer.css';
import { Paper } from '@mui/material';
import Button from "@mui/material/Button";

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
            height: 500, },}}
      noValidate
      autoComplete="off"
    >
    <Paper elevation={2} sx={{padding:{xs: '10px', md: '30px'}}}>
      <div></div>
    
      <TextField fullWidth id="fullWidth" label="Full Name" margin="normal" required />
    
  
      <TextField fullWidth id="fullWidth" label="Email" margin="normal" required />
     

      <TextField fullWidth label="Your Message" id="outlined-size-normal" margin="normal" multiline={true}
      rows={8} required/>

      <Button fullWidth sx={{height:'45px', backgroundColor: '#f0ad4e', marginTop: 'auto'}}></Button>
 
    </Paper>
    </Box>
    </>
  );
}