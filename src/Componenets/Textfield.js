import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Textfield = (props) => {
  return (
    <Box>
{/* <input type="text"  {...props}/> */}
         <TextField id="outlined-basic"  variant="outlined"  {...props}/>
    </Box>
    
         
    
  );
}

export default Textfield;