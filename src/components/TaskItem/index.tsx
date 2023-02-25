import { useCallback } from "react";
import { Task } from "../../types";
import styles from "./styles.module.css";

interface Props {
  groupName: string;
  task: Task;
  toggleTask: (group: string, taskDesc: string) => void;
}

export const TaskItem = ({ groupName, task, toggleTask }: Props) => {
  const handleToggle = useCallback(() => {
    toggleTask(groupName, task.description);
  }, []);

  return (
    <label className={styles.taskItem}>
      <input
        className={styles.checkbox}
        checked={task.checked}
        onChange={handleToggle}
        type="checkbox"
      />
      {task.description}
    </label>
  );
};
