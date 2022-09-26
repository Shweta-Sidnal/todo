import React , {useContext} from 'react'
import Todo from './Todo';
import { contex } from '../Todoprovider';

const Todolist = () => {
  const {todos} = useContext(contex);
  return (
    <div>
        <ul>
            {todos.map((todo,index) =>{
                return  <Todo key={index} todo={todo}  id={index}/>
            })
            }
           
        </ul>
    </div>
  )
}

export default Todolist;