import { Task } from "./components/Task";
import { SectionContainer } from "./components/core/Container";
import { MainCard } from "./components/core/MainCard";

function App() {
  return (
    <SectionContainer>
      <MainCard>
        <Task task='Task 1' onRemove={() => console.log('Delete 1')} onComplete={() => console.log('Complete 1')} />
        <Task task='Task 1' onRemove={() => console.log('Delete 1')} onComplete={() => console.log('Complete 1')} />
        <Task task='Task 1' onRemove={() => console.log('Delete 1')} onComplete={() => console.log('Complete 1')} />
        <Task task='Task 1' onRemove={() => console.log('Delete 1')} onComplete={() => console.log('Complete 1')} />

      </MainCard>
    </SectionContainer>
  );
}

export default App;
