// Puedes colocar esto en un archivo separado si prefieres, por ejemplo en /selectors/todoSelectors.ts

import { RootState } from '../redux/store';

export const selectFilteredTodos = (state: RootState) => {
    const { todos, searchTerm } = state.todos;
    if (!searchTerm.trim()) return todos;
    return todos.filter(todo => todo.text.toLowerCase().includes(searchTerm.toLowerCase()));
};
