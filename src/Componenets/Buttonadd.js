import React from 'react'
import Button from '@mui/material/Button';


const Buttonadd = (props) => {
  return (
    
<Button variant="contained" onClick={props.onClick}> {props.value} </Button>

   
  )
}

export default Buttonadd;