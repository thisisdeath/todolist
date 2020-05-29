import React from 'react';
import Article from './Article';
import './ArticlesList/ArticlesList.less';

export default function ArticlesList(props) {
    return (
        <div className='articles'>
            {props.articles.map(({ text, heading, date }) => <Article className='articles__element' text={text} heading={heading} date={date} />)}
        </div>
    )
}