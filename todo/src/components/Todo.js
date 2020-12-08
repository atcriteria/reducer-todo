import React, { useReducer } from 'react';
import reducer, {initialState} from '../reducers/index';
import {addTodo, setInput, clearInput, toggleComplete, removeTodos} from '../actions/index';
import Item from './Item';

// console.log(initialState);
// let currentState = reducer(initialState, addTodo("Test ToDo"));
// console.log(currentState);

export default function Todo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const submitForm = e => {
        e.preventDefault();
        dispatch(addTodo(state.value));
        dispatch(clearInput());
    }

    const changeHandler = (e) => {
        e.preventDefault(); //dont need this
        dispatch(setInput(e.target.value));
    }

    const toggleCompleted = (item) => {
        dispatch(toggleComplete(item.id));
        console.log(state);
    }

    const handleRemoval = e => {
        e.preventDefault();
        dispatch(removeTodos());
    }

    return(
        <div>
            { (state.todos.length === 0) ? "Please Add a Todo!" : state.todos.map(todo => {
                return <Item todo={todo} toggleCompleted={toggleCompleted}
                key={todo.id}
                />
            })}
            <form onSubmit={submitForm}>
                <label>
                    Add Todo:
                    <input 
                    type="text"
                    name="input"
                    input={state.input}
                    onChange={changeHandler}
                    />
                </label>
                <button>Add ToDo</button>
            </form>
            <button onClick={handleRemoval}>Remove Completed</button>
        </div>
    )
}