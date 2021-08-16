import React, { Component } from 'react';
import AppHeader from './app-header/app-header';
import SearchPanel from './search-panel/search-panel';
import ItemStatusFilter from './item-status-filter/item-status-filter';
import TodoList from './todo-list/todo-list';
import ItemAddForm from './item-add-form/item-add-form';

import './App.css'

export default class App extends Component {

    maxId = 1000;

    state = {
        todoData: [
            {id: 1, label: 'Drink Coffee', important: false, completed: false},
            {id: 2, label: 'Make Awesome React Todo App', important: true, completed: false},
            {id: 3, label: 'Get a Perfect Job Offer', important: false, completed: false}
        ]
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            let newTodoData = todoData.filter(data => data.id !== id);
            return {
                todoData: newTodoData
            }
            // another way to remove item
            // const idx = todoData.findIndex((el) => el.id === id);
            // return {
            //     todoData: [
            //         ...todoData.slice(0, idx),
            //         ...todoData.slice(idx + 1)
            //     ]
            // }
        })
    }

    addItem = (text) => {
        //generate id
        const newItem = {
            id: this.maxId++,
            label: text,
            important: false,
            completed: false
        }

        //add el in array

        this.setState(({ todoData }) => {
            let newTodoData = [...todoData, newItem];
            return {
                todoData: newTodoData
            }
        })
    }

    render() {

        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>

                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList todos={ this.state.todoData }
                          onDeleted={(id) => this.deleteItem(id) } />

                <ItemAddForm onItemAdded={ (text) => this.addItem(text) }/>
            </div>
        )
    }
}

