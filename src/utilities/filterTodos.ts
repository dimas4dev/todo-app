import { RootState } from '../redux/store';

export const selectFilteredTodos = (state: RootState) => {
    const { todos, searchTerm } = state.todos;
    if (!searchTerm.trim()) return todos;
    return todos.filter(todo => todo.text.toLowerCase().includes(searchTerm.toLowerCase()));
};
