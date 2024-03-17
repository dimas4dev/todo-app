import React, { useState } from 'react';
import styled from 'styled-components';

import { SearchBar } from '../SearchBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface MainCardProps {
  children: React.ReactNode;
}

const Card = styled.div<{ colorTheme: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  background-color: ${({ theme, colorTheme }) => colorTheme === 'dark' ? theme.dark.colors.backgroundMainCard : theme.light.colors.backgroundMainCard};
  border-radius: 8px;
   overflow-y: auto;

  @media (max-width: 768px) {
      width: 90%;
    }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  height: 38%;
  width: 95%;
  background-color: ${({ theme, colorTheme }) => colorTheme === 'dark' ? theme.dark.colors.backgroundHeaderCard : theme.light.colors.backgroundHeaderCard};
  border-radius: 8px 8px 0 0;
  margin: .7rem;

  h1{
    color: ${({ theme, colorTheme }) => colorTheme === 'dark' ? theme.dark.colors.titleText : theme.light.colors.titleText};
  }
  
  @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }

  button {
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
  `

export const MainCard = ({ children, }: MainCardProps) => {

  const darkMode = useSelector((state: RootState) => state.todos.theme);

  return (
    <Card colorTheme={darkMode}>
      <Header colorTheme={darkMode}>
        <h1>Tasks</h1>
        <div className="search-bar">
          <SearchBar colorTheme={darkMode} />
        </div>
      </Header>
      {children}
    </Card>
  );
}