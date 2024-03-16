import { useSelector } from 'react-redux';
import { selectFilteredTodos } from './utilities/filterTodos'; // Ajusta la ruta según donde hayas colocado el archivo

import { Task } from "./components/Task";
import { SectionContainer } from "./components/core/Container";
import { MainCard } from "./components/core/MainCard";

function App() {
  const filteredTodos = useSelector(selectFilteredTodos);

  return (
    <SectionContainer>
      <MainCard>
        {filteredTodos.map((todo) => (
          <Task key={todo.id} id={todo.id} title={todo.text} completed={todo.completed} />
        ))}
      </MainCard>
    </SectionContainer>
  );
}

export default App;
