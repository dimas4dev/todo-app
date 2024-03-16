import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Task {
    id: string
    text: string
}

interface TodosState {
    todos: Task[];
    searchTerm: string;
}

const initialState: TodosState = {
    todos: [],
    searchTerm: '',
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action: PayloadAction<Task>) => {
                state.todos.push(action.payload)
            },
            prepare: (text: string) => {
                const id = nanoid()
                return { payload: { id, text } }
            },
        },

        removeTodo: (state, action: PayloadAction<string>): void => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
    },
});

export const { addTodo, removeTodo, setSearchTerm } = todosSlice.actions
export default todosSlice.reducer;


