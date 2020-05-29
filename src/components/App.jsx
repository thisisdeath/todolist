import React, { useState } from 'react';
import TodoList from './TodoList';
import Form from './Form';
import './App/App.less'

export default function App() {

    const [todos, setTodos] = useState([]);

    function addTodo(newTodo) {
        const newTodos = todos.slice();
        newTodos.push(newTodo);
        setTodos(newTodos);
    }

    return (
        <div>
            <Form createTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    )

}