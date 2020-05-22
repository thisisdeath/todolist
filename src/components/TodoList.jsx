import React from 'react';
import Todo from './Todo';


export default function TodoList(props) {
    return (
        <div>
            {props.todos.map(({ text, id }) => (
                <div style={{ display: 'flex' }} key={id}>
                    <Todo text={text} />
                    <button onClick={() => props.deleteTodo(id)}> Х </button>
                </div>
            )
            )
            }
        </div>
    )
}