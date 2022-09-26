import React,{useState,createContext} from 'react'

export const contex = createContext(null);
const Todoprovider = ({children}) => {
    
    const [todos,setTodos]=useState([]);
    
    const addTodo=(todo) =>{
        if(todo.length === 0){
            alert('This field cannot be empty');
        }
        else{
        const newTodo= {text:todo,completed:false};
        setTodos([newTodo,...todos]);   
        console.log(todos);
        }
    };
    
    const deleteTodo = (id) => {
        const newTodos = todos.filter((_,index) => index !== id);   
        setTodos(newTodos);
    };

  return (
    <contex.Provider value={{todos,deleteTodo,addTodo}}>
        {children}
    </contex.Provider>
    
  )
}

export default Todoprovider;