export interface TaskType {
  checked: boolean;
  description: string;
  value: number;
}

export interface TaskGroupType {
  name: string;
  tasks: TaskType[];
}
