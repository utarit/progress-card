import { useTasks } from "../../hooks/useTasks";
import { TaskGroup } from "../TaskGroup";

import styles from "./styles.module.css";

export const ProgressCardContent = () => {
  const { tasksGroups } = useTasks();

  return (
    <div className={styles.content}>
      {tasksGroups.map((group) => (
        <TaskGroup taskGroup={group} />
      ))}
    </div>
  );
};
