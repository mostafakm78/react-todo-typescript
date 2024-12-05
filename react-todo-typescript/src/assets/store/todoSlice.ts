import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import todo from "../models/todo";


const initialState : todo[] = []

const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state , action : PayloadAction<todo>) => {
            state.push(action.payload)
        }
    },
})


export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
