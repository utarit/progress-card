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

export const useTasks = (url: string) => {
  const [state, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);

      if (response.ok) {
        const data: TaskGroup[] = await response.json();
        dispatch({ type: "load_data", payload: data });
      }
    }
    fetchData();
  }, []);

  const toggle = (groupName: string, taskDescription: string) => {
    dispatch({ type: "toggle_task", payload: { groupName, taskDescription } });
  };

  return { state, toggle };
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
