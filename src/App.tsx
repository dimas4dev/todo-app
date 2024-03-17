import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

import { selectFilteredTodos } from './utilities/filterTodos'; // Ajusta la ruta según donde hayas colocado el archivo

import { Task } from "./components/Task";
import { SectionContainer } from "./components/core/Container";
import { MainCard } from "./components/core/MainCard";
import { RootState } from './redux/store';

import WorkStart from './assets/ejercicio.webp';
import FindTask from './assets/buscar.webp';


function App() {
  const filteredTodos = useSelector(selectFilteredTodos);
  const searchTerm = useSelector((state: RootState) => state.todos.searchTerm);

  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

  const NoTasks = styled.img`
  width: 50%;
  max-width: 12rem;
  height: auto;
  margin: 0 auto;
  display: block;
  background-size: cover;
  animation: ${fadeIn} 1s ease-out;
`;

  const NoTaskText = styled.p`
  text-align: center;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;


  return (
    <SectionContainer>
      <MainCard>
        {
          filteredTodos.length === 0 && searchTerm.trim() === '' &&
          <>
            <NoTasks src={WorkStart} />
            <NoTaskText>Hora de Trabajar,<br />Crea una tarea para comenzar</NoTaskText>
          </>
        }
        {
          filteredTodos.length === 0 && searchTerm.trim() !== '' &&
          <>
            <NoTasks src={FindTask} />
            <NoTaskText>No se encontre esa tarea, deberias agregarla</NoTaskText>
          </>
        }
        {
          filteredTodos.map((todo) => (
            <Task key={todo.id} id={todo.id} title={todo.text} completed={todo.completed} />
          ))
        }
      </MainCard>
    </SectionContainer>
  );
}

export default App;