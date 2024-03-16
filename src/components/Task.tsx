import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { removeTodo, completeTodo } from '../redux/todosSlice';

import { IconTrash } from './core/Icons/IconTrash';
import { IconDone } from './core/Icons/IconDone';

const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 95%;
  background-color: ${({ theme }) => theme.light.colors.background};
  border-radius: 8px;
  margin: 1rem;
`;

const TaskText = styled.p<{ completed: boolean }>`
  color: ${({ theme }) => theme.light.colors.text};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  ${(props) =>
    props.completed &&
    ` text-decoration: line-through;
      color: #b0bec5;
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

export const Task = ({ id, title, completed }: TaskProps) => {
  const dispatch = useDispatch();

  const handleRemoveTask = () => {
    dispatch(removeTodo(id));
  };

  const handleToggleComplete = () => {
    dispatch(completeTodo(id));
  };


  return (
    <TaskContainer>
      <TaskText completed={completed}>{title}</TaskText>
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
