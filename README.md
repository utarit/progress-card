# Progress Card

This components show a progress bar with a grouped checkbox data with uneven values.

## See the project

You can see the project from the this link: https://progress-card.vercel.app/.

## How to run locally

1. Clone or download the repository
2. `yarn`
3. `yarn dev`

| prop name    | type                                                   | description                                                                                                                                                                                      |
| ------------ | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `taskGroups` | `TaskGroup[]`                                          | The array of task groups. The main state that is used to construct the components of the card.                                                                                                   |
| `toggleTask` | `(groupName: string, taskDescription: string) => void` | Toggle function that runs when a task is clicked. This functions toggles the state of that task (done/undone) and updates checkbox, progress bar and group icon/name according to the new state. |

### Types

#### Task

| fieldName     | field type | description                                                                            |
| ------------- | ---------- | -------------------------------------------------------------------------------------- |
| `checked`     | `boolean`  | bool value that indicates if the task is done or not                                   |
| `description` | `string`   | task description                                                                       |
| `value`       | `number`   | value of task that is used how much progress bar will move upon completion of the task |

#### TaskGroup

| fieldName | field type | description                                   |
| --------- | ---------- | --------------------------------------------- |
| `name`    | `string`   | Name of the task group                        |
| `tasks`   | `Task[]`   | The list of tasks that this group consists of |
