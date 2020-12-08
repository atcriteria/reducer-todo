import React from 'react';

export default function Item(props){
    const {todo, toggleCompleted} = props;

    const handleClick = () => {
        toggleCompleted(todo)
    }

    return(
        <div onClick={handleClick}
        className={todo.completed ? 'completed' : 'item'}
        >
            {todo.item}
        </div>)
}