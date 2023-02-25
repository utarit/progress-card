import { useMemo, useState } from "react";
import { TaskGroup as TaskGroupType } from "../../types";
import ProgressBar from "../ProgressBar";
import { TaskGroup } from "../TaskGroup";
import { TaskItem } from "../TaskItem";

import styles from "./styles.module.css";

interface Props {
  taskGroups: TaskGroupType[];
  toggleTask: (groupName: string, taskDesc: string) => void;
}

export const ProgressCard = ({ taskGroups, toggleTask }: Props) => {
  const checkedValue = taskGroups.reduce((total, nextGroup) => {
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
      taskGroups.reduce((total, nextGroup) => {
        return (
          total +
          nextGroup.tasks.reduce(
            (groupTotal, nextTask) => groupTotal + nextTask.value,
            0
          )
        );
      }, 0),
    [taskGroups.length]
  );

  const progress = (checkedValue * 100) / totalValue;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h4 className={styles.title}>Lodgify Grouped Tasks</h4>
        <ProgressBar progress={progress} />
      </div>
      <div className={styles.content}>
        {taskGroups.map((group) => (
          <TaskGroup taskGroup={group} toggleTask={toggleTask} />
        ))}
      </div>
    </div>
  );
};
