import { useState } from "react";
import { TaskGroup as TaskGroupType } from "../../types";
import ProgressBar from "../ProgressBar";
import { TaskGroup } from "../TaskGroup";
import { TaskItem } from "../TaskItem";

import styles from "./styles.module.css";

interface Props {
  taskGroups: TaskGroupType[];
  toggleTask: (groupName: string, taskDesc: string) => void;
  totalValue: number;
}

export const ProgressCard = ({ taskGroups, toggleTask, totalValue }: Props) => {
  const [check, setCheck] = useState(false);

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

  const progress = (checkedValue * 100) / totalValue;

  console.log(check);
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
