import React, { useState } from 'react';
import styled from 'styled-components';

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

export const MainCard = ({ children }: MainCardProps) => {
    const [theme, setTheme] = useState('light');
    const toggleImageSrc = theme === 'light' ? '/images/icon-moon.svg' : '/images/icon-sun.svg';

    const toogleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <Card>
            <Header>
                <h1>Tasks</h1>
                <button title='toogleTheme' onClick={toogleTheme}>
                    <img src={toggleImageSrc} alt="" />
                </button>
            </Header>
            {children}
        </Card>
    );
}