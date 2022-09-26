import React from 'react'
// import Header from './Componenets/Header';
import Addtodo from './Features/Addtodo';
import Todolist from './Features/Todolist';
import Todoprovider from './Todoprovider';
        
const Todoapp = () => {
    
     return (
        <Todoprovider>
    <div>
    <div style={{margin:'40px',fontSize:'30px',textAlign:'center',color:'#601efa'}}>TODO APP</div>
        <div> <Addtodo/> </div>
        
        <div><Todolist /> 
           
        </div>
    </div>
    </Todoprovider>
  )
}

export default Todoapp;