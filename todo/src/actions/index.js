export const ADD_TODO = "ADD_TODO";
export const SET_INPUT = "SET_INPUT";
export const CLEAR_INPUT = "CLEAR_INPUT";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const REMOVE_TODOS = "REMOVE_TODOS";

export const addTodo = (todo) => {
    return({type: ADD_TODO, payload: todo})
}

export const setInput = (input) => {
    return ({type: SET_INPUT, payload: input});
}

export const clearInput = () => {
    return ({type: CLEAR_INPUT});
}

export const toggleComplete = (itemId) => {
    return ({type: TOGGLE_COMPLETED, payload: itemId});
}

export const removeTodos = () => {
    return ({type: REMOVE_TODOS})
}
