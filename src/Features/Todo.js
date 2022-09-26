import React,{useContext} from 'react'
import Buttonadd from '../Componenets/Buttonadd';
import { contex } from '../Todoprovider';
import './todo.css';

const Todo = ({todo,id}) => {
  const {deleteTodo} = useContext(contex);
  return (
    <div className='list'>
      <p  key={id}>
      {todo.text}
      <span>
      <Buttonadd  className='button' value="Delete" onClick={ () => {deleteTodo(id); }}/>
      </span>
      </p>
{/* <li style={{ textDecoration:todo.isCompleted ? "line-through" :""}} key={id} >
    <span className='list' onClick={()=>CompleteTodo(id)}>{todo.text}</span>
    <Buttonadd  className="button" value="X" onClick={ () => {deleteTodo(id); }}/>
    </li> */}
    </div>
  )
}

export default Todo;