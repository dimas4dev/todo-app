import { useSelector } from 'react-redux';

import { RootState } from './redux/store';

import { Task } from "./components/Task";
import { SectionContainer } from "./components/core/Container";
import { MainCard } from "./components/core/MainCard";


function App() {

  const todosStore = useSelector((state: RootState) => state.todos);

  const { todos } = todosStore

  return (
    <SectionContainer>
      <MainCard>
        {todos.map((todo) => (
          <Task key={todo.id} id={todo.id} title={todo.text} />
        ))}
      </MainCard>
    </SectionContainer>
  );
}

export default App;
