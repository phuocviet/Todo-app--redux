import { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos, completeTodos, removeTodos, updateTodos } from '../app/todosSlice'
import TodoList from './TodoList'
import './styles/displayTodo.css'

const mapStateToProps = (state) =>{
    return{
      todos: state
    }
  }
  const mapDispatchtToProps = (dispatch) =>{
    return{
      addTodo: (obj) => dispatch(addTodos(obj)),
      removeTodo: (id) => dispatch(removeTodos(id)),
      updateTodo: (obj) => dispatch(updateTodos(obj)),
      completeTodo: (id) => dispatch(completeTodos(id))
    }
  }
const DisplayTodo = (props) => {
    const [sort, setSort] = useState("active")

  return (
    <div className='displaytodos'>
        <div className='buttons'>
            <button onClick={() =>setSort("active")}>Active</button>
            <button onClick={() =>setSort("completed")}>Completed</button>
            <button onClick={() =>setSort("all")}>All</button> 
        </div>
        <ul>
        {props.todos.length> 0 && <h2>Todo list</h2>}
            {
                props.todos.length > 0 && sort === "active"?
                props.todos.map(item =>{
                    return(
                        item.completed === false &&
                        <TodoList
                            key={item.id}
                            item={item}
                            removeTodo = {props.removeTodo}
                            updateTodo = {props.updateTodo}
                            completeTodo = {props.completeTodo}
                        />
                    )
                }) : null
            }
            {
                props.todos.length > 0 && sort === "completed"?
                props.todos.map(item =>{
                    return(
                        item.completed === true &&
                        <TodoList
                            key={item.id}
                            item={item}
                            removeTodo = {props.removeTodo}
                            updateTodo = {props.updateTodo}
                            completeTodo = {props.completeTodo}
                        />
                    )
                }) : null
            }
            {
                props.todos.length > 0 && sort === "all"?
                props.todos.map(item =>{
                    return(
                        <TodoList
                            key={item.id}
                            item={item}
                            removeTodo = {props.removeTodo}
                            updateTodo = {props.updateTodo}
                            completeTodo = {props.completeTodo}
                        />
                    )
                }) : null
            }
        </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchtToProps)(DisplayTodo)