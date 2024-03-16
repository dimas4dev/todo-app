import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchBar } from '../SearchBar';

interface MainCardProps {
  children: React.ReactNode;
}

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50vw;
  background-color: ${({ theme }) => theme.light.colors.backgroundMainCard};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.light.colors.borderColor};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  height: 10vh;
  width: 95%;
  background-color: ${({ theme }) => theme.light.colors.background};
  border-radius: 8px 8px 0 0;
  margin: 1rem;

  button {
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
  `
const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  width: 95%;
  background-color: ${({ theme }) => theme.light.colors.background};
  border-radius: 0 0 8px 8px;
  margin: 1rem;
  `
const ClearButton = styled.button`
background-color: #ff4136; 
color: white;
border: none;
padding: 0.5rem 1rem;
border-radius: 5px;
transition: transform 0.2s, background-color 0.2s;
&:hover {
  cursor: pointer;
  transform: scale(1.1);
  background-color: #e74c3c;
}

&:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 65, 54, 0.4);
}
`;

const CompletedButton = styled.button`
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: transform 0.2s, background-color 0.2s;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: #27ae60;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(46, 204, 113, 0.4);
  }
`;

const DeletedTasksButton = styled.button`
  background-color: #7f8c8d;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: transform 0.2s, background-color 0.2s;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: #707b7c;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(127, 140, 141, 0.4);
  }
`;


export const MainCard = ({ children }: MainCardProps) => {
  const [theme, setTheme] = useState('light');
  const toggleImageSrc = theme === 'light' ? '/images/icon-moon.svg' : '/images/icon-sun.svg';

  const toogleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const onAdd = () => {
    console.log('Add task');
  }

  return (
    <Card>
      <Header>
        <h1>Tasks</h1>
        <SearchBar onAdd={onAdd} />
        <button title='toogleTheme' onClick={toogleTheme}>
          <img src={toggleImageSrc} alt="" />
        </button>
      </Header>
      {children}
      <Footer>
        <ClearButton title='clearTasks'>Clear Tasks</ClearButton>
        <CompletedButton title='showCompletedTasks'>Completed</CompletedButton>
        <DeletedTasksButton title='showDeletedTasks'>Deleted</DeletedTasksButton>
      </Footer>
    </Card>
  );
}