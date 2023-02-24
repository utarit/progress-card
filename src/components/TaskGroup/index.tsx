import ITask from "../../assets/task.svg";
import IArrow from "../../assets/arrow-down.svg";

import styles from "./styles.module.css";

interface Props {
  id: number;
}

export const TaskGroup = ({ id }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <img src={ITask} /> Group {id}
      </div>
      <div className={styles.actions}>
        Show <img src={IArrow} />
      </div>
    </div>
  );
};
