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
  height: 10%;
  width: 95%;
  background-color: ${({ theme }) => theme.light.colors.background};
  border-radius: 8px 8px 0 0;
  margin: .7rem;
  
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

export const MainCard = ({ children }: MainCardProps) => {
  const [theme, setTheme] = useState('light');
  const [showSearchBar, setShowSearchBar] = useState(false);


  return (
    <Card>
      <Header>
        <h1>Tasks</h1>
        <div className="search-bar">
          <SearchBar />
        </div>
      </Header>
      {children}
    </Card>
  );
}