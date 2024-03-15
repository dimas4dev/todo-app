import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 2rem;
`;

function App() {
  return (
    <div>
      <Title>Hello Vite + React + TypeScript + Styled Components!</Title>
    </div>
  );
}

export default App;
