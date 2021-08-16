import React from 'react';
import AppHeader from './app-header/app-header';
import SearchPanel from './search-panel/search-panel';
import ItemStatusFilter from './item-status-filter/item-status-filter';
import TodoList from './todo-list/todo-list';

import './App.css'

const App = () => {
    let todoData = [
        { id: 1, label: 'Drink Coffee', important: false, completed: false },
        { id: 2, label: 'Make Awesome React Todo App', important: true, completed: false },
        { id: 3, label: 'Get a Perfect Job Offer', important: false, completed: false }
    ]

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />

            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    )
}

export default App;
