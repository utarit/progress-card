import IArrow from "../../assets/arrow-down.svg";
import ICompleted from "../../assets/completed.svg";
import ITask from "../../assets/task.svg";

import styles from "./styles.module.css";
import { TaskGroup as TaskGroupType } from "../../types";
import classNames from "classnames";
import { useState } from "react";
import { TaskItem } from "../TaskItem";

interface Props {
  taskGroup: TaskGroupType;
  toggleTask: (groupName: string, taskDesc: string) => void;
}

export const TaskGroup = ({ taskGroup, toggleTask }: Props) => {
  const [isTasksOpen, setIsTasksOpen] = useState(false);
  const allTasksChecked = taskGroup.tasks.reduce(
    (allChecked, next) => allChecked && next.checked,
    true
  );

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.header}
        onClick={() => setIsTasksOpen((prev) => !prev)}
      >
        <div
          className={classNames(
            styles.title,
            allTasksChecked && styles.allChecked
          )}
        >
          <img src={allTasksChecked ? ICompleted : ITask} /> {taskGroup.name}
        </div>
        <div className={styles.actions}>
          {isTasksOpen ? "Hide" : "Show"}{" "}
          <img
            src={IArrow}
            className={classNames(
              isTasksOpen ? styles.hideArrow : styles.showArrow
            )}
          />
        </div>
      </button>
      {isTasksOpen && (
        <div className={styles.taskContent}>
          {taskGroup.tasks.map((task) => (
            <TaskItem
              groupName={taskGroup.name}
              task={task}
              toggleTask={toggleTask}
            />
          ))}
        </div>
      )}
    </div>
  );
};
