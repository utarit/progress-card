import { useEffect, useReducer, useState } from "react";
import { TaskGroup } from "../types";

type LoadAction = {
  type: "load_data";
  payload: TaskGroup[];
};

type ToggleAction = {
  type: "toggle_task";
  payload: { groupName: string; taskDescription: string };
};

type Action = LoadAction | ToggleAction;

const URL =
  "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress";

export const useTasks = () => {
  const [totalValue, setTotalValue] = useState(0);
  const [state, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(URL);

      if (response.ok) {
        const data: TaskGroup[] = await response.json();
        dispatch({ type: "load_data", payload: data });

        const totalValue = data.reduce((total, nextGroup) => {
          return (
            total +
            nextGroup.tasks.reduce(
              (groupTotal, nextTask) => groupTotal + nextTask.value,
              0
            )
          );
        }, 0);

        setTotalValue(totalValue);
      }
    }
    fetchData();
  }, []);

  const toggle = (groupName: string, taskDescription: string) => {
    dispatch({ type: "toggle_task", payload: { groupName, taskDescription } });
  };

  return { state, totalValue, toggle };
};

function reducer(state: TaskGroup[], action: Action) {
  switch (action.type) {
    case "load_data": {
      return action.payload;
    }
    case "toggle_task": {
      return state.map((group) => {
        if (group.name === action.payload.groupName) {
          const newTasks = group.tasks.map((task) => {
            if (task.description === action.payload.taskDescription) {
              return { ...task, checked: !task.checked };
            }
            return task;
          });
          return { ...group, tasks: newTasks };
        }
        return group;
      });
    }
  }
}
