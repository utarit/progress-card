import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { TaskGroupType } from "../types";

export const TasksContext = createContext({
  progress: 0,
  tasksGroups: [] as TaskGroupType[],
  toggleTask: (groupName: string, taskName: string) => {},
});

interface Props {
  children: React.ReactNode;
}
const URL =
  "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress";

export const TasksProvider = ({ children }: Props) => {
  const [tasksGroups, setTaskGroups] = useState<TaskGroupType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(URL);

      if (response.ok) {
        const data: TaskGroupType[] = await response.json();
        console.log(data);
        setTaskGroups(data);
      }
    }
    fetchData();
  }, []);

  const handleToggleTask = (groupName: string, taskName: string) => {
    setTaskGroups((state) =>
      state.map((group) => {
        if (group.name === groupName) {
          const newTasks = group.tasks.map((task) => {
            if (task.description === taskName) {
              return { ...task, checked: !task.checked };
            }
            return task;
          });
          return { ...group, tasks: newTasks };
        }
        return group;
      })
    );
  };

  const checkedValue = tasksGroups.reduce((total, nextGroup) => {
    return (
      total +
      nextGroup.tasks.reduce(
        (groupTotal, nextTask) =>
          nextTask.checked ? groupTotal + nextTask.value : groupTotal,
        0
      )
    );
  }, 0);

  const totalValue = useMemo(
    () =>
      tasksGroups.reduce((total, nextGroup) => {
        return (
          total +
          nextGroup.tasks.reduce(
            (groupTotal, nextTask) => groupTotal + nextTask.value,
            0
          )
        );
      }, 0),
    [tasksGroups.length]
  );

  const progress = (checkedValue * 100) / totalValue;

  return (
    <TasksContext.Provider
      value={{ progress, tasksGroups, toggleTask: handleToggleTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TasksContext);
};
