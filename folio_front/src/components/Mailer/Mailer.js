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
        '& > :not(style)': { margin: 1, p:3, width: {xs: '350px', md: 300 },
            height: 500, },}}
      noValidate
      autoComplete="off"
    >
    <Paper elevation={2} sx={{margin: 1,}}>
      <div></div>
    
      <TextField fullWidth id="fullWidth" label="Full Name" margin="normal" required />
    
  
      <TextField fullWidth id="fullWidth" label="Email" margin="normal" required />
     

      <TextField fullWidth label="Your Message" id="outlined-size-normal" margin="normal" multiline={true}
      rows={3} required/>

      <Button fullWidth sx={{height:'45px', color: 'blue', marginTop: '20px'}}></Button>
 
    </Paper>
    </Box>
    </>
  );
}