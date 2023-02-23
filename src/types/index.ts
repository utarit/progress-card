export interface Task {
  checked: boolean;
  description: string;
  value: number;
}

export interface TaskGroup {
  name: string;
  tasks: Task[];
}
