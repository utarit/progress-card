import { ProgressCard } from "./components/ProgressCard";
import { useTasks } from "./hooks/useTasks";

const URL =
  "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress";

function App() {
  const { state: taskState, toggle } = useTasks(URL);

  return <ProgressCard taskGroups={taskState} toggleTask={toggle} />;
}

export default App;
