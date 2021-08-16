import React, { Component } from 'react';

import './todo-list-item.css'

export default class TodoListItem extends Component {

    render() {
        const { label, onDeleted, onToggleImportant, onToggleCompleted, completed, important } = this.props;

        let classNames = `todo-list-item ${completed ? 'completed' : ''} ${important ? 'important' : ''}`;

        return (
            <span className={ classNames } >
                <span className="todo-list-item-label"
                      onClick={ onToggleCompleted }>
                    { label }
                </span>

                <button type="button"
                        className="btn btn-outline-success btn-sm float-end"
                        onClick={ onToggleImportant }>
                    <i className="bi bi-exclamation-lg"/>
                </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm float-end"
                        onClick={ onDeleted } >
                    <i className="bi bi-trash"/>
                </button>
            </span>
        )
    }
}
