import React, { useState } from 'react';
import TodoList from './TodoList';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';

export default function App() {

    const [todos, setTodos] = useState([]);

    function addTodo(newTodo) {
        const newTodos = todos.slice();
        newTodos.push({id: uuidv4(), text: newTodo});
        setTodos(newTodos);
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div>
            <Form createTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    )

}