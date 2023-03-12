import { useCallback } from "react";
import { useTasks } from "../../hooks/useTasks";
import { TaskType } from "../../types";
import styles from "./styles.module.css";

interface Props {
  groupName: string;
  task: TaskType;
}

export const TaskItem = ({ groupName, task }: Props) => {
  const { toggleTask } = useTasks();

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
      <p className={styles.description}>{task.description}</p>
    </label>
  );
};
