import styled from 'styled-components';

interface SectionContainerProps {
    children: React.ReactNode;
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.light.colors};
`;

export const SectionContainer = ({ children }: SectionContainerProps) => {
    return (
        <Container>
            {children}
        </Container>
    );
}