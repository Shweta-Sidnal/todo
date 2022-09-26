import React, { useState,useContext } from 'react'
import Textfield from '../Componenets/Textfield';
import Buttonadd from '../Componenets/Buttonadd';
import { contex } from '../Todoprovider';

        

const Addtodo = () => {
    const [todo,setTodo]=useState("");
    const {addTodo} = useContext(contex);
    
    const onchangehandler=(e)=>
    {
        setTodo(e.target.value);
    };
  return (
    <div style={{textAlign:'center'}}>
        <form style={{position:'relative'}}>
            <Textfield placeholder="Enter the Task here" value={todo} onChange={onchangehandler}/> 
            <Buttonadd value="Addtask" 
            onClick={() => { 
                addTodo(todo);
                setTodo("");
            }} />
        
        </form>

    </div>
  )
}

export default Addtodo