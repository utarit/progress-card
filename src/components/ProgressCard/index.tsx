import { useMemo, useState } from "react";
import { TasksProvider, useTasks } from "../../hooks/useTasks";
import { TaskGroupType } from "../../types";
import ProgressBar from "../ProgressBar";
import { ProgressCardContent } from "../ProgressCardContent";
import { TaskGroup } from "../TaskGroup";

import styles from "./styles.module.css";

interface Props {
  title: string;
}

export const ProgressCard = ({ title }: Props) => {
  return (
    <TasksProvider>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h4 className={styles.title}>{title}</h4>
          <ProgressBar />
        </div>
        <ProgressCardContent />
      </div>
    </TasksProvider>
  );
};
