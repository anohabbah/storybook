import React from 'react';
import ProTypes from 'prop-types'

export default function Task({ task: {id, title, state}, onArchiveTask, onPinTask }) {
    return (
        <div className={`list-item ${state}`}>
            <label className="checkbox">
                <input type="checkbox" name="checked" disabled={true} defaultChecked={state === 'TASK_ARCHIVED'} />
                <span className="checkbox-custom" onClick={() => onArchiveTask(id)}/>
            </label>
            <div className="title">
                <input type="text" value={title} readOnly={true} placeholder="Input title" />
            </div>

            <div className="actions" onClick={event => event.stopPropagation()}>
                {state !== 'TASK_ARCHIVED' && (
                    <a onClick={() => onPinTask(id)}>
                        <span className={`icon-star`}/>
                    </a>
                )}
            </div>
        </div>
    );
}

Task.propTypes = {
    task: ProTypes.shape({
        id: ProTypes.string.isRequired,
        title: ProTypes.string.isRequired,
        state: ProTypes.string.isRequired,
    }),
    onArchiveTask: ProTypes.func,
    onPinTask: ProTypes.func,
}
