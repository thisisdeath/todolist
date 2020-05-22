import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
    return (
        <div>
            {props.todos.map(text => <Todo text={text}/>)}
        </div>
    )
}