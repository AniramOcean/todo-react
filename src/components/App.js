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
            this.createTodoItem('Buy Coffee'),
            {id: 1, label: 'Drink Coffee', important: false, completed: false},
            {id: 2, label: 'Make Awesome React Todo App', important: true, completed: false},
            {id: 3, label: 'Get a Perfect Job Offer', important: false, completed: false},
            this.createTodoItem('Walking with a dog'),
            this.createTodoItem('Make dinner')
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

    createTodoItem(label) {
        return {
            id: this.maxId++,
            label,
            important: false,
            completed: false
        }
    }

    addItem = (text) => {
        //generate id
       const newItem = this.createTodoItem(text)

        //add el in array
        this.setState(({ todoData }) => {
            let newTodoData = [...todoData, newItem];
            return {
                todoData: newTodoData
            }
        })
    }

    toggleProperty(arr, id, propName) {
        let newTodoData = [...arr];
        newTodoData.map(data => data.id === id ? data[propName] = !data[propName] : data);

        return {
            todoData: newTodoData
        }
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return this.toggleProperty(todoData, id, 'important')
        })
    }

    onToggleCompleted = (id) => {
        this.setState(({ todoData }) => {
            return this.toggleProperty(todoData, id, 'completed')

            // another way to toggle completed field
            // const arrId = todoData.findIndex((el) => el.id === id);
            // const oldItem = todoData[arrId];
            // let newItem = {...oldItem, completed: !oldItem.completed}
            // return {
            //     todoData: [
            //         ...todoData.slice(0, arrId),
            //         newItem,
            //         ...todoData.slice(arrId + 1)
            //     ]
            // }
        })
    }

    render() {

        const { todoData } = this.state
        const completedCount = todoData.filter((item) => item.completed).length;
        const todoCount = todoData.length - completedCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={ todoCount } completed={ completedCount }/>

                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList todos={ todoData }
                          onDeleted={ (id) => this.deleteItem(id) }
                          onToggleImportant={ (id) => this.onToggleImportant(id) }
                          onToggleCompleted={ (id) => this.onToggleCompleted(id) }
                />

                <ItemAddForm onItemAdded={ (text) => this.addItem(text) }/>
            </div>
        )
    }
}

