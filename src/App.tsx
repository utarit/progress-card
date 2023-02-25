import { ProgressCard } from "./components/ProgressCard";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { state: taskState, toggle } = useTasks();

  return <ProgressCard taskGroups={taskState} toggleTask={toggle} />;
}

export default App;
