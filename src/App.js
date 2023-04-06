import './App.css';
import Input from './components/TodoInput'
import DisplayTodo from './components/displayTodo';



function App() {
  return (
    <div className="App">
      <div className='todoform'>
        <Input/>
        <DisplayTodo/>
      </div>
      
    </div>
  );
}

export default App;
