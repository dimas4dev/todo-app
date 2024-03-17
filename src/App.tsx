import { useSelector, useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';

import { selectFilteredTodos } from './utilities/filterTodos';

import { Task } from "./components/Task";
import { SectionContainer } from "./components/core/Container";
import { MainCard } from "./components/core/MainCard";
import { RootState } from './redux/store';

import WorkStart from './assets/ejercicio.webp';
import FindTask from './assets/buscar.webp';
import { IconSun } from './components/core/Icons/IconSun';
import { IconMoon } from './components/core/Icons/IconMoon';
import { switchTheme } from './redux/todosSlice';
import theme from './styles/theme';


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

const NoTaskText = styled.p<{ colorTheme: string }>`
text-align: center;
font-size: 1rem;
color: ${({ colorTheme }) => colorTheme === 'dark' ? theme.dark.colors.text : theme.light.colors.text};


@media (max-width: 768px) {
  font-size: 0.9rem;
}
`;

const ThemeDiv = styled.div`
display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 90%;
  }
  `;


function App() {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos);
  const searchTerm = useSelector((state: RootState) => state.todos.searchTerm);

  const darkMode = useSelector((state: RootState) => state.todos.theme);


  return (
    <SectionContainer colorTheme={darkMode || ''} >
      <ThemeDiv>
        {darkMode === 'dark' ? <IconSun fill='#ECEBEB' onClick={() => dispatch(switchTheme())} /> : <IconMoon onClick={() => dispatch(switchTheme())} />}
      </ThemeDiv>
      <MainCard colorTheme={darkMode || ''}>
        {
          filteredTodos.length === 0 && searchTerm.trim() === '' &&
          <>
            <NoTasks src={WorkStart} alt='No hay tareas' />
            <NoTaskText colorTheme={darkMode || ''}>Hora de Trabajar,<br />Crea una tarea para comenzar</NoTaskText>
          </>
        }
        {
          filteredTodos.length === 0 && searchTerm.trim() !== '' &&
          <>
            <NoTasks src={FindTask} alt='¿Agregar tarea?' />
            <NoTaskText colorTheme={darkMode || ''}>No se encontre esa tarea, ¡Deberias agregarla!</NoTaskText>
          </>
        }
        {
          filteredTodos.map((todo) => (
            <Task colorTheme={darkMode || ''} key={todo.id} id={todo.id} title={todo.text} completed={todo.completed} />
          ))
        }
      </MainCard>
    </SectionContainer>
  );
}

export default App;