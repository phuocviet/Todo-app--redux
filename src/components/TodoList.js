import { useRef } from 'react';
import './styles/todoList.css';
import { AiFillEdit, AiFillCheckCircle, AiFillDelete } from 'react-icons/ai';
import { SiIfixit } from 'react-icons/si';

const TodoList = (props) => {
  const { item, removeTodo, completeTodo, updateTodo, unCompleteTodo } = props;
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const upadate = (id, value, e) => {
    updateTodo({ id, item: value });
    inputRef.current.disabled = false;
  };

  return (
    <li key={item.id}>
      <div className="card">
        <input
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyUp={(e) => upadate(item.id, inputRef.current.value, e)}
        />
        {item.completed && <span className="completed">Done</span>}
        {!item.completed && <span className="unComplete">Need to be done</span>}
        <div className="cardbuttons">
          <button onClick={() => removeTodo(item.id)}>
            <AiFillDelete />
          </button>
          {!item.completed && (
            <button onClick={() => completeTodo(item.id)}>
              <AiFillCheckCircle />
            </button>
          )}
          {item.completed && (
            <button onClick={() => unCompleteTodo(item.id)}>
              <SiIfixit />
            </button>
          )}
          <button onClick={() => changeFocus()}>
            <AiFillEdit />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoList;
