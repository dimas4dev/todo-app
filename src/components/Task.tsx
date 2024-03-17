import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { removeTodo, completeTodo } from '../redux/todosSlice';

import { IconTrash } from './core/Icons/IconTrash';
import { IconDone } from './core/Icons/IconDone';

const TaskContainer = styled.div<{ colorTheme: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 95%;
  background-color: ${({ theme, colorTheme }) => colorTheme === 'dark' ? theme.dark.colors.backgroundTodo : theme.light.colors.backgroundTodo};
  border-radius: 8px;
  margin: .5rem;
`;

const TaskText = styled.p<{ completed: boolean, colorTheme: string }>`
  color: ${({ theme, colorTheme }) => colorTheme === 'dark' ? theme.dark.colors.textTodo : theme.light.colors.textTodo};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  ${({ completed, colorTheme, theme }) => completed && `
      text-decoration: line-through;
      font-style: italic;
      color: ${colorTheme === 'dark' ? theme.dark.colors.textCompleted : theme.light.colors.textCompleted};
  `}
`;


const TaskButton = styled.button`
  background-color: transparent;
  border: none;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const IconDiv = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  `;

interface TaskProps {
  id: string;
  title: string;
  completed: boolean;
}

export const Task = ({ id, title, completed, colorTheme }: TaskProps) => {
  const dispatch = useDispatch();

  const handleRemoveTask = () => {
    dispatch(removeTodo(id));
  };

  const handleToggleComplete = () => {
    dispatch(completeTodo(id));
  };


  return (
    <TaskContainer colorTheme={colorTheme}>
      <TaskText colorTheme={colorTheme} completed={completed}>{title}</TaskText>
      <IconDiv>
        <TaskButton title='completeTask' onClick={handleToggleComplete} >
          <IconDone />
        </TaskButton>
        <TaskButton title='removeTask' onClick={handleRemoveTask}>
          <IconTrash />
        </TaskButton>
      </IconDiv>
    </TaskContainer>
  );
}
