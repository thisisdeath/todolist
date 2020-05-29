import React, { useState } from 'react';
import './Form/Form.less';

export default function Form(props) {

    const [heading, setHeading] = useState('');
    const [text, setText] = useState('');

    function clickHandler() {
        if (heading && text) {
            props.createArticle({text, heading, date: new Date().toLocaleDateString()});
            setHeading('');
            setText('');
        }
    }

    return (
        <div className='form'>
            <label for='heading' className='form__element form__label'> Название </label>
            <input name='heading' value={heading} className='form__element form__input' onChange={(event)=>{setHeading(event.target.value)}}/>
            <label for='text' className='form__element form__label'> Текст </label>
            <textarea value={text} className='form__element form__textarea form__input' name='text' rows='5' onChange={(event)=>{setText(event.target.value)}}/>
            <button className='form__button' onClick={clickHandler}> Добавить статью </button>
        </div>
    )

}