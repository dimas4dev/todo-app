import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Task {
    id: string
    text: string
    completed: boolean
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
                return { payload: { id, text, completed: false } }
            },
        },

        removeTodo: (state, action: PayloadAction<string>): void => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        completeTodo: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },

        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },

        addTodoWithSearchTerm: (state) => {
            if (!state.searchTerm.trim()) return;
            const newTask = { id: nanoid(), text: state.searchTerm, completed: false };
            state.todos.push(newTask);
            state.searchTerm = '';
        },
    },
});

export const { addTodo, removeTodo, setSearchTerm, completeTodo, addTodoWithSearchTerm } = todosSlice.actions
export default todosSlice.reducer;


