import { useState } from 'react';
import { addTodos } from '../app/todosSlice';
import { connect } from 'react-redux';
import './styles/todoInput.css';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};
const mapDispatchtToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Input = (props) => {
  const [input, setInput] = useState('');

  const handlerClick = () => {
    props.addTodo({
      id: Math.floor(Math.random() * 1000),
      item: input,
      completed: false,
    });
  };

  console.log('props from props', props);
  return (
    <div className="box-container">
      <div>
        <label>Todo app</label>
        <input
          type="text"
          placeholder="To do..."
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="addbutton" onClick={() => handlerClick()}>
          +
        </button>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchtToProps)(Input);
