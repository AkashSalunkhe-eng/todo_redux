import { ADD_TODO, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS } from "./actionTypes";

export const addTodo = (data) => ({
    type:ADD_TODO,
    payload:data
})

export const addTodoLoading = () => ({
    type:ADD_TODO_LOADING,
   
})
export const addTodoSuccess = (data) => ({
    type:ADD_TODO_SUCCESS,
    payload:data
})
export const addTodoError = (data) => ({
    type:ADD_TODO_ERROR,
    payload:data
});

//GET TODOS //

export const getTodoLoading = () =>({
    type:GET_TODO_LOADING,
    loading:true
})

export const getTodoSuccess = (data) =>({
    type:GET_TODO_SUCCESS,
    payload:data,
    loading:false
})

export const getTodoError = (data) => ({
    type:GET_TODO_ERROR,
    error:true
});