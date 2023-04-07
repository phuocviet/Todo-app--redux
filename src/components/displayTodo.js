import { useState } from 'react';
// import {useDispatch, useSelector} from 'react-redux'
import { connect } from 'react-redux';
import {
  addTodos,
  completeTodos,
  removeTodos,
  unCompleteTodos,
  updateTodos,
} from '../app/todosSlice';
import TodoList from './TodoList';
import './styles/displayTodo.css';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};
const mapDispatchtToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
    unCompleteTodo: (id) => dispatch(unCompleteTodos(id)),
  };
};

const DisplayTodo = (props) => {
  const [sort, setSort] = useState('active');
  //action hooks
  // const todos = useSelector ((state) => state.todos)
  // useDispatch((dispatch) =>{
  //   return {
  //         addTodo: (obj) => dispatch(addTodos(obj)),
  //         removeTodo: (id) => dispatch(removeTodos(id)),
  //         updateTodo: (obj) => dispatch(updateTodos(obj)),
  //         completeTodo: (id) => dispatch(completeTodos(id)),
  //         unCompleteTodo: (id) => dispatch(unCompleteTodos(id)),
  //       };
  // })
  //check todo is existed
  const todoExist = () => props.todos.length > 0;
  //read todo list
  const todoMap = () =>
    props.todos.map((todo) => {
      return (
        todo.completed === false && (
          <TodoList
            key={todo.id}
            item={todo}
            removeTodo={props.todos.removeTodo}
            updateTodo={props.todos.pupdateTodo}
            completeTodo={props.todos.completeTodo}
            unCompleteTodo={props.todos.unCompleteTodo}
          />
        )
      );
    });

  return (
    <div className="displaytodos">
      <div className="buttons">
        <button onClick={() => setSort('active')}>Active</button>
        <button onClick={() => setSort('completed')}>Completed</button>
        <button onClick={() => setSort('all')}>All</button>
      </div>
      <ul>
        {todoExist && <h2>Todo list</h2>}
        {todoExist && sort === 'active' ? todoMap() : null}
        {todoExist && sort === 'completed' ? todoMap() : null}
        {todoExist && sort === 'all' ? todoMap() : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchtToProps)(DisplayTodo);
