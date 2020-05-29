import React from 'react';
import './Article/Article.less';

export default function Article(props) {
    return (
        <div className={`article ${props.className}`}>
            <div className='article__header'>
                <div className='article__heading'> <b> {props.heading} </b></div>
                <div className='article__date'> {props.date} </div>
            </div> 
            <div className='article__inner'>{props.text}</div>
        </div>
    )
}