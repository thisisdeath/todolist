import React from 'react';
import TodoList from './TodoList';

const arr = ['hello', 'world'];

export default function App() {
    return (
        <div> <TodoList todos={arr}/> </div>
    )
}