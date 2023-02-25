import styles from "./styles.module.css";

interface Props {
  progress: number;
}

const ProgressBar = ({ progress }: Props) => {
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
