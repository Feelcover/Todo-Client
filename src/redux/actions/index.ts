import { TodoActionTypes } from "../../types/types"

export const createTodo = (payload: string) => {
    return {
        type:TodoActionTypes.CREATE_TODO,
        payload
    }
}