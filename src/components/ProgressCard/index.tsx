import ProgressBar from "../ProgressBar";
import styles from "./styles.module.css";

export const ProgressCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h4 className={styles.title}>Lodgify Grouped Tasks</h4>
        <ProgressBar progress={50} />
      </div>
    </div>
  );
};
