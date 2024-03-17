import styled from 'styled-components';

interface SectionContainerProps {
    children: React.ReactNode;
    colorTheme: string;
}

const Container = styled.section<{ colorTheme: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  background-color: ${({ colorTheme, theme }) => colorTheme === 'dark' ? theme.dark.colors.background : theme.light.colors};
`;

export const SectionContainer = ({ children, colorTheme }: SectionContainerProps) => {
    return (
        <Container colorTheme={colorTheme}>
            {children}
        </Container>
    );
}