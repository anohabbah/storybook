import React from "react";

import TaskList from "./TaskList";
import { actionsData, taskData } from './Task.stories'

export default {
    component: TaskList,
    title: 'TaskList',
    excludeStories: /.*Data$/,
}

export const defaultTasksData = [
    { ...taskData, id: '1', title: 'Task 1' },
    { ...taskData, id: '2', title: 'Task 2' },
    { ...taskData, id: '3', title: 'Task 3' },
    { ...taskData, id: '4', title: 'Task 4' },
    { ...taskData, id: '5', title: 'Task 5' },
    { ...taskData, id: '6', title: 'Task 6' },
    { ...taskData, id: '7', title: 'Task 7' },
    { ...taskData, id: '8', title: 'Task 8' },
]

export const withPinnedTasksData = [
    ...defaultTasksData.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    { id: '7', title: 'Task 7 (pinned)', state: 'TASK_PINNED' },
    { id: '8', title: 'Task 8 (pinned)', state: 'TASK_PINNED' },
];

export const Default = () => <TaskList tasks={defaultTasksData} {...actionsData} />;

export const WithPinnedTasks = () => <TaskList tasks={withPinnedTasksData} {...actionsData} />;

export const Loading = () => <TaskList loading tasks={[]} {...actionsData} />;

export const Empty = () => <TaskList tasks={[]} {...actionsData} />;
