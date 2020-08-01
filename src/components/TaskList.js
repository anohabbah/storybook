import React from "react";

import Task from "./Task";

/**
 * @param {boolean} loading
 * @param {[]} tasks
 * @param {Function} onPinTask
 * @param {Function}  onArchivedTask
 * @returns {JSX.Element}
 * @constructor
 */
function TaskList({ loading, tasks, onPinTask, onArchivedTask }) {
    const events = { onPinTask, onArchivedTask };

    if (loading) return <div className="list-items">loading</div>

    if (tasks.length === 0) return <div className="list-items">empty</div>

    return (
        <div className="list-items">
            {tasks.map(task => <Task key={task.id} task={task} {...events} />)}
        </div>
    )
}

export default TaskList
