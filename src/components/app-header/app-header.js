import React from 'react';
import './app-header.css'

const AppHeader = ({ toDo, completed}) => {
    return (
        <header className="app-header d-flex">
            <h1>Todo List</h1>
            <h2>{ toDo } more to do, { completed } done</h2>
        </header>
    )
}

export default AppHeader;
