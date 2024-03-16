import styled from 'styled-components';

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

const TaskText = styled.p`
  color: ${({ theme }) => theme.light.colors.text};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
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
  task: string;
  onRemove: () => void;
  onComplete: () => void;
}

export const Task = ({ task, onRemove, onComplete }: TaskProps) => {
  return (
    <TaskContainer>
      <TaskText>{task}</TaskText>
      <IconDiv>
        <TaskButton title='completeTask' onClick={onComplete}>
          <IconDone />
        </TaskButton>
        <TaskButton title='removeTask' onClick={onRemove}>
          <IconTrash />
        </TaskButton>
      </IconDiv>
    </TaskContainer>
  );
}
