import { useTasks } from "../../hooks/useTasks";
import styles from "./styles.module.css";

const ProgressBar = () => {
  const { progress } = useTasks();

  const progressPercentage = `${Math.round(progress)}%`;

  return (
    <div className={styles.container}>
      <div className={styles.filler} style={{ width: progressPercentage }}>
        <span className={styles.label}>{progressPercentage}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
