import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
  isChecked: boolean;
  onTaskClick: () => void;
}

export const TaskItem = ({ children, isChecked, onTaskClick }: Props) => {
  return (
    <label className={styles.taskItem} onClick={onTaskClick}>
      <input className={styles.checkbox} checked={isChecked} type="checkbox" />
      {children}
    </label>
  );
};
