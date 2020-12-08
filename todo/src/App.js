import './App.css';
import React, { useReducer } from 'react';
import reducer, {initialState} from './reducers/index';
import { addTodo } from './actions/index'
import Todo from './components/Todo';


function App() {
  return (
    <div className="App">
      Hello App!
    <Todo />
    </div>
  );
}

export default App;