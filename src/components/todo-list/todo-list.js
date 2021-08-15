import React from 'react';

import './todo-list.css';

import TodoListItem from '../todo-list-item/todo-list-item';

const TodoList = ({ todos }) => {
    const items = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li className="list-group-item" key={ id }>
                <TodoListItem { ...itemProps } />
            </li>
        )
    });

    return (
        <ul className="todo-list list-group">
            { items }
        </ul>
    )
}

export default TodoList;
