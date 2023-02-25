import { ProgressCard } from "./components/ProgressCard";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { state: taskState, toggle, totalValue } = useTasks();

  return (
    <ProgressCard
      taskGroups={taskState}
      toggleTask={toggle}
      totalValue={totalValue}
    />
  );
}

export default App;
