import { Task } from "../../types";
import styles from "./styles.module.css";

interface Props {
  task: Task;
  toggle: () => void;
}

export const TaskItem = ({ task, toggle }: Props) => {
  return (
    <label className={styles.taskItem}>
      <input
        className={styles.checkbox}
        checked={task.checked}
        onChange={toggle}
        type="checkbox"
      />
      {task.description}
    </label>
  );
};
