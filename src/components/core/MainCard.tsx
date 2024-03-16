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
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 95%;
  background-color: ${({ theme }) => theme.light.colors.background};
  border-radius: 8px 8px 0 0;
  margin: 1rem;
  `

export const MainCard = ({ children }: MainCardProps) => {
    return (
        <Card>
            <Header>
                <h1>Tasks</h1>
                <button onClick={toggleTheme}>
                    <img src={toggleImageSrc} alt="" />
                </button>
            </Header>
            {children}
        </Card>
    );
}