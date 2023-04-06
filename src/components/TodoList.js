import { useRef } from 'react'
import './styles/todoList.css'
import {AiFillEdit, AiFillCheckCircle, AiFillDelete} from 'react-icons/ai'

const TodoList = (props) => {
  const { item, removeTodo, completeTodo, updateTodo} =props
  const inputRef = useRef(true) 
     
    const changeFocus = () => {
      inputRef.current.disabled = false
      inputRef.current.focus()
    }
    const upadate = (id, value, e) =>{
        if(e.which === 16){
        updateTodo({id, item: value})
        inputRef.current.disabled = true
      }
    }


  
  return (
    <li key={item.id}>
      <div className='card'>
      <textarea 
        ref={inputRef} 
        disabled={inputRef} 
        defaultValue={item.item} 
        onKeyUp={(e) => upadate(item.id, inputRef.current.value, e )}
        />
        {item.completed && <span className='completed'>Done</span>}
        {!item.completed && <span className='unComplete'>Need to be done</span>}
        <div className='cardbuttons'>
        <button onClick={() =>removeTodo(item.id)}><AiFillDelete/></button>
        <button onClick={() => completeTodo(item.id)}><AiFillCheckCircle/></button>
        <button onClick={() =>changeFocus()}><AiFillEdit/></button>
        </div>
      </div>
    </li>
  ) 
}


export default TodoList