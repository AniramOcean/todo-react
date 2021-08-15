import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {
    const items = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={ id }>
                <TodoListItem { ...itemProps } />
            </li>
        )
    });

    return (
        <ul>
            { items }
        </ul>
    )
}

export default TodoList;
