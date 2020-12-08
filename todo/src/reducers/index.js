import {SET_INPUT, ADD_TODO, CLEAR_INPUT, TOGGLE_COMPLETED, REMOVE_TODOS} from '../actions/index';

export const initialState = {
    todos: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }],
    value: "",

};

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_TODO): 
            return ({...state, todos: [...state.todos, {item: action.payload, id: new Date(), completed: false}]});
        case(SET_INPUT):
            return ({...state, value: action.payload});
        case(CLEAR_INPUT):
            return ({...state, value: ""});
        case(TOGGLE_COMPLETED): {
            const updateTodos = state.todos.map(todo => {
                if (todo.id === action.payload){
                    return {item: todo.item, completed: !todo.completed, id: todo.id}
                } else {
                    return todo;
                };
            })
            return ({...state, todos: [...updateTodos]})
        }
        case(REMOVE_TODOS):
            const removeTodos = state.todos.filter(todo => {
                return !todo.completed;
            });
            return ({...state, todos: [...removeTodos]});
        default: return(state);
    }
}

export default reducer;