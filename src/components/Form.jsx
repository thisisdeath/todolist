import React, {useState} from 'react';

export default function Form(props) {
    const [value, setValue] = useState('');

    function clickHandler() {
        if (value) {
            props.createTodo(value);
            setValue('');
        }
    }

    return (
        <div> 
         <input value={value} onChange={(event)=>{setValue(event.target.value)}}/>
         <button onClick={clickHandler}> Добавить задание </button>
        </div>
    )
}