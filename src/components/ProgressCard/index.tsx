import { useState } from "react";
import ProgressBar from "../ProgressBar";
import { TaskItem } from "../TaskItem";

import styles from "./styles.module.css";

export const ProgressCard = () => {
  const [check, setCheck] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h4 className={styles.title}>Lodgify Grouped Tasks</h4>
        <ProgressBar progress={50} />
        <TaskItem
          isChecked={check}
          onTaskClick={() => setCheck((prev) => !prev)}
        >
          task test
        </TaskItem>
      </div>
    </div>
  );
};
