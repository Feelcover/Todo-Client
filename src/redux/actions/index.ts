import { TodoActionTypes } from "../../types/types"

export const getTodos = () => {
    return {
        type:TodoActionTypes.GET_TODOS,
    }
}

export const createTodo = (payload: string) => {
    return {
        type:TodoActionTypes.CREATE_TODO,
        payload
    }
}

export const deleteTodo = (payload: string) => {
    return {
        type:TodoActionTypes.DELETE_TODO,
        payload
    }
}

export const editTodo = (id: string, done: boolean, title: string) => {
    return {
        type:TodoActionTypes.EDIT_TODO,
        payload: {
            id,
            done,
            title
        }
    }
}

export const completeTodo = (id: string, done: boolean) => {
    return {
        type:TodoActionTypes.COMPLETE_TODO,
        payload: {
            id,
            done
        }
    }
}

export const showAlert = (text: string, status: string) => {
    return {
        type:TodoActionTypes.SHOW_ALERT,
        payload: text, status
    }
}

export const hideAlert = () => {
    return {
        type:TodoActionTypes.HIDE_ALERT,
    }
}